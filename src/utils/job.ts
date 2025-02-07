export default interface Job {
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
  category: 'technical' | 'non technical';
}