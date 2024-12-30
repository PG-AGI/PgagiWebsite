// JobPostingsManagement.tsx

'use client';

import { useState, useEffect, useRef } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import dynamic from 'next/dynamic';
import axios from 'axios';
import styles from '../management/Admin.module.scss';
import Modal from './Modal';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  numberOfOpenings: number;
  applicationUrl: string;
  status: 'active' | 'inactive'; 
}

type FormValues = {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: { id: string; value: string }[];
  requirements: { id: string; value: string }[];
  numberOfOpenings: number;
  applicationUrl: string;
};

const JobPostingsManagement = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingJobId, setEditingJobId] = useState<string | null>(null);
  const [activeJobs, setActiveJobs] = useState<Job[]>([]);
  const [inactiveJobs, setInactiveJobs] = useState<Job[]>([]);
  const [loadingActive, setLoadingActive] = useState<boolean>(false);
  const [loadingInactive, setLoadingInactive] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const formRef = useRef<HTMLDivElement>(null);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      title: '',
      department: '',
      location: '',
      type: '',
      description: '',
      responsibilities: [{ id: uuidv4(), value: '' }],
      requirements: [{ id: uuidv4(), value: '' }],
      numberOfOpenings: 1,
      applicationUrl: '',
    },
  });

  const {
    fields: responsibilityFields,
    append: appendResponsibility,
    remove: removeResponsibility,
  } = useFieldArray({
    control,
    name: 'responsibilities',
  });

  const {
    fields: requirementFields,
    append: appendRequirement,
    remove: removeRequirement,
  } = useFieldArray({
    control,
    name: 'requirements',
  });

  const fetchActiveJobs = async () => {
    setLoadingActive(true);
    setError('');
    try {
      const response = await axios.get('/api/careers/postings?status=active');
      setActiveJobs(response.data);
    } catch (err: any) {
      console.error('Error fetching active jobs:', err);
      setError(err.response?.data?.message || 'Failed to fetch active jobs.');
    } finally {
      setLoadingActive(false);
    }
  };

  const fetchInactiveJobs = async () => {
    setLoadingInactive(true);
    setError('');
    try {
      const response = await axios.get('/api/careers/postings?status=inactive');
      setInactiveJobs(response.data);
    } catch (err: any) {
      console.error('Error fetching inactive jobs:', err);
      setError(err.response?.data?.message || 'Failed to fetch inactive jobs.');
    } finally {
      setLoadingInactive(false);
    }
  };

  const fetchJobs = () => {
    fetchActiveJobs();
    fetchInactiveJobs();
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const onSubmit = async (data: FormValues) => {
    const sanitizedData: Job = {
      id: isEditing && editingJobId ? editingJobId : uuidv4(),
      title: data.title.trim(),
      department: data.department.trim(),
      location: data.location.trim(),
      type: data.type.trim(),
      description: data.description.trim(),
      responsibilities: data.responsibilities
        .map((resp) => resp.value.trim())
        .filter((resp) => resp !== ''),
      requirements: data.requirements
        .map((req) => req.value.trim())
        .filter((req) => req !== ''),
      numberOfOpenings: data.numberOfOpenings,
      applicationUrl: data.applicationUrl.trim(),
      status: isEditing ? 'active' : 'active', // Ensure status is active on creation/editing
    };

    try {
      if (isEditing && editingJobId) {
        const response = await axios.put(`/api/careers/postings/${editingJobId}`, sanitizedData);
        if (response.status === 200) {
          alert('Job updated successfully!');
          reset();
          setIsEditing(false);
          setEditingJobId(null);
          fetchJobs();
        } else {
          alert(`Error: ${response.data.message}`);
        }
      } else {
        const response = await axios.post('/api/careers/postings', sanitizedData);
        if (response.status === 201) {
          alert('Job created successfully!');
          reset();
          fetchJobs();
        } else {
          alert(`Error: ${response.data.message}`);
        }
      }
    } catch (error: any) {
      console.error('Error submitting form:', error);
      alert(error.response?.data?.message || 'An unexpected error occurred.');
    }
  };

  const handleEdit = (job: Job) => {
    reset({
      title: job.title,
      department: job.department,
      location: job.location,
      type: job.type,
      description: job.description,
      responsibilities: job.responsibilities.map((resp) => ({ id: uuidv4(), value: resp })),
      requirements: job.requirements.map((req) => ({ id: uuidv4(), value: req })),
      numberOfOpenings: job.numberOfOpenings,
      applicationUrl: job.applicationUrl,
    });
    setIsEditing(true);
    setEditingJobId(job.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (jobId: string) => {
    const confirmDelete = window.confirm('Are you sure you want to mark this job as inactive?');
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(`/api/careers/postings/${jobId}`);
      if (response.status === 200) {
        alert('Job marked as inactive successfully!');
        fetchJobs();
      } else {
        alert(`Error: ${response.data.message}`);
      }
    } catch (error: any) {
      console.error('Error deleting job:', error);
      alert(error.response?.data?.message || 'Failed to mark the job as inactive.');
    }
  };

  const handleRecreate = (job: Job) => {
    const confirmRecreate = window.confirm('Do you want to recreate this job posting?');
    if (!confirmRecreate) return;
    reset({
      title: job.title,
      department: job.department,
      location: job.location,
      type: job.type,
      description: job.description,
      responsibilities: job.responsibilities.map((resp) => ({ id: uuidv4(), value: resp })),
      requirements: job.requirements.map((req) => ({ id: uuidv4(), value: req })),
      numberOfOpenings: job.numberOfOpenings,
      applicationUrl: job.applicationUrl,
    });
    setIsEditing(false);
    setEditingJobId(null);
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewDetails = (job: Job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <div className={styles.jobsContainer}>
      <h2>{isEditing ? 'Edit Job Posting' : 'Create Job Posting'}</h2>

      <div ref={formRef}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              {...register('title', { required: 'Title is required' })}
              placeholder="Enter job title"
              required
            />
            {errors.title && <span className={styles.error}>{errors.title.message}</span>}
          </div>

          {/* Department */}
          <div className={styles.formGroup}>
            <label htmlFor="department">Department:</label>
            <input
              type="text"
              id="department"
              {...register('department', { required: 'Department is required' })}
              placeholder="Enter department"
              required
            />
            {errors.department && <span className={styles.error}>{errors.department.message}</span>}
          </div>

          {/* Location */}
          <div className={styles.formGroup}>
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              {...register('location', { required: 'Location is required' })}
              placeholder="Enter location"
              required
            />
            {errors.location && <span className={styles.error}>{errors.location.message}</span>}
          </div>

          {/* Type */}
          <div className={styles.formGroup}>
            <label htmlFor="type">Job Type:</label>
            <select
              id="type"
              {...register('type', { required: 'Job type is required' })}
              required
            >
              <option value="">Select Job Type</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
            {errors.type && <span className={styles.error}>{errors.type.message}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="numberOfOpenings">Number of Openings:</label>
            <input
              type="number"
              id="numberOfOpenings"
              {...register('numberOfOpenings', {
                required: 'Number of openings is required',
                min: {
                  value: 0,
                  message: 'Number of openings cannot be negative',
                },
                valueAsNumber: true, 
                validate: {
                  isInteger: (value) =>
                    Number.isInteger(value) || 'Number of openings must be an integer',
                },
              })}
              placeholder="Enter number of openings"
              required
            />
            {errors.numberOfOpenings && (
              <span className={styles.error}>{errors.numberOfOpenings.message}</span>
            )}
          </div>

          {/* Description */}
          <div className={styles.formGroup}>
            <label htmlFor="description">Description:</label>
            <Controller
              control={control}
              name="description"
              rules={{ required: 'Description is required' }}
              render={({ field }) => (
                <ReactQuill
                  theme="snow"
                  value={field.value}
                  onChange={field.onChange}
                  modules={{
                    toolbar: [
                      [{ header: [1, 2, false] }],
                      ['bold', 'italic', 'underline', 'link'],
                      [{ list: 'ordered' }, { list: 'bullet' }],
                      ['clean'],
                    ],
                  }}
                  formats={['header', 'bold', 'italic', 'underline', 'list', 'bullet', 'link']}
                />
              )}
            />
            {errors.description && <span className={styles.error}>{errors.description.message}</span>}
          </div>

          {/* Responsibilities */}
          <div className={styles.formGroup}>
            <label>Responsibilities:</label>
            {responsibilityFields.map((field, index) => (
              <div key={field.id} className={styles.dynamicField}>
                <input
                  type="text"
                  {...register(`responsibilities.${index}.value` as const, { required: 'Responsibility is required' })}
                  placeholder={`Responsibility ${index + 1}`}
                  required
                />
                <button type="button" onClick={() => removeResponsibility(index)} className={styles.removeButton}>
                  Remove
                </button>
                {/* Uncomment below if you want to display errors for responsibilities
                {errors.responsibilities?.[index]?.value && (
                  <span className={styles.error}>{errors.responsibilities[index].value?.message}</span>
                )} */}
              </div>
            ))}
            <button type="button" onClick={() => appendResponsibility({ id: uuidv4(), value: '' })} className={styles.addButton}>
              Add Responsibility
            </button>
          </div>

          {/* Requirements */}
          <div className={styles.formGroup}>
            <label>Requirements:</label>
            {requirementFields.map((field, index) => (
              <div key={field.id} className={styles.dynamicField}>
                <input
                  type="text"
                  {...register(`requirements.${index}.value` as const, { required: 'Requirement is required' })}
                  placeholder={`Requirement ${index + 1}`}
                  required
                />
                <button type="button" onClick={() => removeRequirement(index)} className={styles.removeButton}>
                  Remove
                </button>
              </div>
            ))}
            <button type="button" onClick={() => appendRequirement({ id: uuidv4(), value: '' })} className={styles.addButton}>
              Add Requirement
            </button>
          </div>

          {/* Application URL */}
          <div className={styles.formGroup}>
            <label htmlFor="applicationUrl">Application URL:</label>
            <input
              type="url"
              id="applicationUrl"
              {...register('applicationUrl', {
                required: 'Application URL is required',
                pattern: {
                  value: /^https?:\/\/.+/,
                  message: 'Enter a valid URL',
                },
              })}
              placeholder="Enter application URL"
              required
            />
            {errors.applicationUrl && <span className={styles.error}>{errors.applicationUrl.message}</span>}
          </div>

          {/* Submit and Reset Buttons */}
          <div className={styles.formGroup}>
            <button type="submit" className={styles.submitButton}>
              {isEditing ? 'Update Job Posting' : 'Create Job Posting'}
            </button>
            {isEditing && (
              <button
                type="button"
                onClick={() => {
                  reset();
                  setIsEditing(false);
                  setEditingJobId(null);
                }}
                className={styles.cancelButton}
              >
                Cancel Edit
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Active Jobs List */}
      <h2>Active Job Postings</h2>
      {loadingActive ? (
        <p>Loading active jobs...</p>
      ) : error ? (
        <p className={styles.error}>{error}</p>
      ) : activeJobs.length === 0 ? (
        <p>No active job postings found.</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Department</th>
              <th>Location</th>
              <th>Type</th>
              <th>Openings</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {activeJobs.map((job) => (
              <tr key={job.id}>
                <td>{job.title}</td>
                <td>{job.department}</td>
                <td>{job.location}</td>
                <td>{job.type}</td>
                <td>{job.numberOfOpenings}</td>
                <td>
                  <button onClick={() => handleViewDetails(job)} className={styles.viewButton}>
                    View
                  </button>
                  <button onClick={() => handleEdit(job)} className={styles.editButton}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(job.id)} className={styles.deleteButton}>
                    Close
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <h2>Inactive Job Postings</h2>
      {loadingInactive ? (
        <p>Loading inactive jobs...</p>
      ) : error ? (
        <p className={styles.error}>{error}</p>
      ) : inactiveJobs.length === 0 ? (
        <p>No inactive job postings found.</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Department</th>
              <th>Location</th>
              <th>Type</th>
              <th>Openings</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inactiveJobs.map((job) => (
              <tr key={job.id}>
                <td>{job.title}</td>
                <td>{job.department}</td>
                <td>{job.location}</td>
                <td>{job.type}</td>
                <td>{job.numberOfOpenings}</td>
                <td>
                  <button onClick={() => handleViewDetails(job)} className={styles.viewButton}>
                    View
                  </button>
                  <button onClick={() => handleEdit(job)} className={styles.editButton}>
                    Edit
                  </button>
                  <button onClick={() => handleRecreate(job)} className={styles.recreateButton}>
                    Recreate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Modal for Viewing Job Details */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedJob ? (
          <div className={styles.modalContentInner}>
            <h2>{selectedJob.title}</h2>
            <p><strong>Department:</strong> {selectedJob.department}</p>
            <p><strong>Location:</strong> {selectedJob.location}</p>
            <p><strong>Type:</strong> {selectedJob.type}</p>
            <p><strong>Number of Openings:</strong> {selectedJob.numberOfOpenings}</p>
            <div className={styles.description}>
              <strong>Description:</strong>
              <div dangerouslySetInnerHTML={{ __html: selectedJob.description }}></div>
            </div>
            <div className={styles.section}>
              <strong>Responsibilities:</strong>
              <ul>
                {selectedJob.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
            <div className={styles.section}>
              <strong>Requirements:</strong>
              <ul>
                {selectedJob.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </div>
            <p>
              <strong>Application URL:</strong>{' '}
              <a href={selectedJob.applicationUrl} target="_blank" rel="noopener noreferrer">
                Apply Here
              </a>
            </p>
          </div>
        ) : (
          <p>No job details available.</p>
        )}
      </Modal>
    </div>
  );
};

export default JobPostingsManagement;
