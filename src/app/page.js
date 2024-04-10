

import UserProfile from "./about/UserProfile";
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Link href='/profile'>profile</Link>
     
      <UserProfile
        name='John Doe'
        bio='Software Engineer'
        hobby='Playing guitar'
      />
    </main>
  );
}
