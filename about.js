```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error in Next.js 13+ if you don't handle it correctly.  
  const someData = getSomeData();
  console.log(someData);  
  return (
    <div><h1>About Page</h1></div>
  );
}

function getSomeData() {
  // Simulate fetching data, potentially resulting in an error
  if (Math.random() < 0.5) {
    throw new Error('Failed to fetch data');
  }
  return { message: 'Data fetched successfully!' };
}
```