```javascript
// pages/aboutSolution.js

export default function About() {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getSomeData();
        setData(result);
      } catch (error) {
        setError(error);
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>{data.message}</p>
    </div>
  );
}

function getSomeData() {
  // Simulate fetching data, potentially resulting in an error
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        reject(new Error('Failed to fetch data'));
      } else {
        resolve({ message: 'Data fetched successfully!' });
      }
    }, 500);
  });
}
```