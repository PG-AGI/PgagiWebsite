// JobPostingsManagement.tsx

'use client';

import { useState, useEffect } from 'react';
import { useForm, useFieldArray, Controller, FieldErrors } from 'react-hook-form';
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
  applicationUrl: string;
}

type FormValues = {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: { id: string; value: string }[];
  requirements: { id: string; value: string }[];
  applicationUrl: string;
};

const JobPostingsManagement = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingJobId, setEditingJobId] = useState<string | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

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

  const fetchJobs = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('/api/careers/postings'); // Updated endpoint
      setJobs(response.data);
    } catch (err: any) {
      console.error('Error fetching jobs:', err);
      setError(err.response?.data?.message || 'Failed to fetch jobs.');
    } finally {
      setLoading(false);
    }
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
      responsibilities: data.responsibilities.map((resp) => resp.value.trim()).filter((resp) => resp !== ''),
      requirements: data.requirements.map((req) => req.value.trim()).filter((req) => req !== ''),
      applicationUrl: data.applicationUrl.trim(),
    };

    try {
      if (isEditing && editingJobId) {
        const response = await axios.put(`/api/careers/postings/${editingJobId}`, sanitizedData); // Updated endpoint
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
        const response = await axios.post('/api/careers/postings', sanitizedData); // Updated endpoint
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
      applicationUrl: job.applicationUrl,
    });
    setIsEditing(true);
    setEditingJobId(job.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (jobId: string) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this job posting?');
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(`/api/careers/postings/${jobId}`); // Updated endpoint
      if (response.status === 200 || response.status === 204) {
        alert('Job deleted successfully!');
        fetchJobs();
      } else {
        alert(`Error: ${response.data.message}`);
      }
    } catch (error: any) {
      console.error('Error deleting job:', error);
      alert(error.response?.data?.message || 'Failed to delete the job.');
    }
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

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {/* Title */}
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
              {/* {errors.responsibilities?.[index]?.value && (
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
              {/* {errors.requirements?.[index]?.value && (
                <span className={styles.error}>{errors.requirements[index].value?.message}</span>
              )} */}
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
          {/* {errors.applicationUrl && <span className={styles.error}>{errors.applicationUrl.message}</span>} */}
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

      {/* Jobs List */}
      <h2>Existing Job Postings</h2>
      {loading ? (
        <p>Loading jobs...</p>
      ) : error ? (
        <p className={styles.error}>{error}</p>
      ) : jobs.length === 0 ? (
        <p>No job postings found.</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Department</th>
              <th>Location</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id}>
                <td>{job.title}</td>
                <td>{job.department}</td>
                <td>{job.location}</td>
                <td>{job.type}</td>
                <td>
                  <button onClick={() => handleViewDetails(job)} className={styles.viewButton}>
                    View
                  </button>
                  <button onClick={() => handleEdit(job)} className={styles.editButton}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(job.id)} className={styles.deleteButton}>
                    Delete
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
