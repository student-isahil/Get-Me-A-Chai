
import Dashboard from '@/components/Dashboard'
// import { useRouter } from 'next/router'

const DashboardPage = () => {

    // const {data: session} = useSession()
    // if(!session)
    // {
    //     const router = useRouter()
    //     router.push('/login')
    // }
    
    return (
        <Dashboard/>
    )
}

export default DashboardPage

export const metadata = {
    title: "Dashboard - Get Me A Chai",
  }
   