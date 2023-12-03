

async function getAdvice() {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();

      if (data.slip) {
        const advice = document.getElementById('advice');
        advice.textContent = data.slip.advice;

        const adviceId = document.getElementById('advice-number');
        adviceId.textContent = `#${data.slip.id}`

      } else {
        console.error('Error fetching advice:', data.message);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }