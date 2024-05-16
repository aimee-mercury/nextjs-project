
import Link from "next/link";
import Form from "./users/form";

export default function Home() {
  return (
    <main>
      <nav style={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
          <li style={{ margin: '0 20px' }}>
           
              <a style={{ color: 'white', textDecoration: 'none' }}>Home</a>
         
          </li>
          <li style={{ margin: '0 20px' }}>
           
              <a style={{ color: 'white', textDecoration: 'none' }}>About</a>
           
          </li>
          <li style={{ margin: '0 20px' }}>
            
              <Link href="/users" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
          
          </li>
          <li style={{ margin: '0 20px' }}>
            <a style={{ color: 'white', textDecoration: 'none', borderColor: 'red', borderWidth: '1px' }}>More Info</a>
          </li>
        </ul>
      </nav>
      <div style={{ padding: '20px', color: '#fff' }}>
        <h1>Hello Marie Aimee</h1>
        <p>Welcome to my Next.js page!</p>
        <div>
          <h2>Some Content</h2>
          <p>This is some example content for the page.</p>
        </div>
      </div>
      <Form/>
    </main>
  );
}
