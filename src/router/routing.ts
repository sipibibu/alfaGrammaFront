import {useNavigate} from "react-router";

export const LoginRoute = (role: string) => {
    const navigate = useNavigate()
    if (role == "respondent") {
        navigate('/profile')
    }
    else {
        navigate("/mylist")
    }
}
