class EmailService {
    async SendEmail(fromEmail, fromName, toEmail, toName, subject, body) {
      try {
        // Skicka e-postmeddelandet här
        console.log("Skickar e-post...");
      } catch (error) {
        console.error("Ett fel uppstod vid skickande av e-post:", error);
      }
    }
  }
  
  export default EmailService;
  