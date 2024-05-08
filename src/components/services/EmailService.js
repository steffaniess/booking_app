import axios from 'axios';

const sendEmail = async (formData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/email/send', formData);
    console.log(response.data); // För att visa svar från backend i konsolen
    return response.data;
  } catch (error) {
    console.error('Ett fel uppstod:', error);
    return null;
  }
};

export default sendEmail;
