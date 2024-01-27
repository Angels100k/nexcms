import Link from 'next/link'

type UsernameType = string | false;
interface HomePageProps {
    username: UsernameType;
  }
  
const HomePage: React.FC<HomePageProps> = ({ username }) => {
return (
    <div>
    {username ?
    <>
        <h2>Hi {username}</h2>
        <Link href="/profile">Profile</Link><br/>
    </>: 
    <>
        <Link href="/admin/login">Login</Link><br/>
    </>
    }
    </div>
);
}

export default HomePage