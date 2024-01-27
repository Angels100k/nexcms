import { getCookie } from 'cookies-next';
import Link from 'next/link'
import { useRouter } from 'next/router'
type UsernameType = string | false;
interface HomePageProps {
    username: UsernameType;
  }

const SignupPage: React.FC<HomePageProps> = ({ username }) => {
    const router = useRouter()
    const { msg } = router.query
    return (
        <div>
            <Link href="/">Home</Link><br/>
            {msg ?
                <h3 className="red">{msg}</h3>
            :
                <></>
            }
            <h2>Sign up</h2>
            <form action='/api/signup' method='POST'>
                <input name="username" id="username" type="text" placeholder='username' required></input><br/>
                <input name="password" id="password" type="password" placeholder='password' required></input><br/>
                <input name="passwordagain" id="passwordagain" type="password" placeholder='password again' required></input><br/>
                <input type="submit" value="Signup"/>
            </form>
        </div>
    );
}