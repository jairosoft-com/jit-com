// Utility function to fetch training programs
export async function fetchTrainingPrograms() {
  try {
    const response = await fetch('https://5446fa86-16bf-48b6-a8c3-0f2dbafe5cb3.mock.pstmn.io/programs');
    
    if (!response.ok) {
      throw new Error('Failed to fetch training programs');
    }
    
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching training programs:', error);
    return [];
  }
}
