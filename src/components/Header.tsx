import { FormEventHandler, FunctionComponent, ReactNode, useEffect, useState } from "react";
import { HeaderStyled } from "../styles/Header";

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: FunctionComponent<ButtonProps> = ({ onClick }) => {
  return (<button type="submit" onClick={onClick}>Search</button>)
}

interface FormProps {
  onSubmit: FormEventHandler<HTMLFormElement> | undefined,
  children: ReactNode,
}

const Form: FunctionComponent<FormProps> = ({ onSubmit, children }) => {
  return (<form method="get" onSubmit={onSubmit}>
    {children}
  </form>)
}

interface About {
  company?: string | undefined,
  website?:  string | undefined,
  location?: string | undefined,
  twitter?: string | undefined,
}

interface Data {
  name: string | undefined,
  login: string | undefined,

}

const Header= () => {
  // imagem e input!

  const [about, setAbout] = useState<About>({
    company: "",
    location: "",
    twitter: "",
    website: ""
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, name: string | undefined) => {
    /*  if (name !== undefined) { */
    /*  } */
   
    var dataISODataHora = new Date("2011-01-25T18:44:36Z").toLocaleString()
    
    /* .getMonth().getFullYear().toDateString( */
    /* toDateString() */

    console.log(dataISODataHora)

    console.log("vasco da gama!!" + e)
    const response = await (await fetch("https://api.github.com/users/octocat")).json()
    console.log(response.login)

   }

  return (
    <HeaderStyled>
      <div className="container">
        <div className="top-content">
          <h2>devfinder</h2>
          <button className="changeTheme"> dark <img src="" alt="" /> </button>
        </div>
        <nav>
          <Form onSubmit={(e) => {
            handleSubmit(e)
            e.preventDefault()
          }}>
            <fieldset>
            <legend className="sr-only">Enter the username you want to search for</legend>

            <label htmlFor="name">
              <svg height="24" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z" fill="#0079ff"/></svg>
            </label>
            
            <input type="text" name="name" id="name" placeholder="Search GitHub username..."/>

            <Button onClick={(e) => {
              console.log(e.currentTarget.parentElement)
            }}/>

            </fieldset>
          </Form>
        </nav>
      </div>
    </HeaderStyled>
  )
}

export default Header;