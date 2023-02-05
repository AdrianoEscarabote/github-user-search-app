import { MainStyled } from "../styles/MainContent";
import imgLocation from "../assets/icon-location.svg";
import imgTwitter from "../assets/icon-twitter.svg";
import imgWebSite from "../assets/icon-website.svg";
import imgCompany from "../assets/icon-company.svg";
import { TopStyled } from "../styles/MainTopContent";

import { FormEventHandler, FunctionComponent, ReactNode, useEffect, useState } from "react";
/* 
interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: FunctionComponent<ButtonProps> = ({ onClick }) => {
  return (<button type="submit" onClick={onClick}>Search</button>)
} */

interface FormProps {
  onSubmit: FormEventHandler<HTMLFormElement> | undefined,
  children: ReactNode,
}

interface InputProps {
  value: string,
  name: string,
  placeholder: string,
  id: string,
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined,
}

const InputText: FunctionComponent<InputProps> = ({ onChange }) => {
  return (<input onChange={onChange} type="text"/>) 
}

const Form: FunctionComponent<FormProps> = ({ onSubmit, children }) => {
  return (<form method="get" onSubmit={onSubmit}>
    {children}
  </form>)
};

interface About {
  company?: string | undefined,
  website?:  string | undefined,
  location?: string | undefined,
  twitter?: string | undefined,
};

interface Data {
  name: string | undefined,
  login: string | undefined,
  img: string | undefined,
  repos: string | undefined, 
  followers: number | string,
  following: number | string,
};

export default function Main () {

  const [about, setAbout] = useState<About>({
    company: "",
    location: "",
    twitter: "",
    website: ""
  });
  const [data, setData] = useState<Data>({
    followers: "",
    following: "", 
    img: "",
    login: "",
    name: "",
    repos: "",
  });
  
  const [userName, setUserName] = useState<string>("AdrianoEscarabote");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    var dataISODataHora = new Date("2011-01-25T18:44:36Z").toLocaleString()

    console.log(dataISODataHora)

    const getResponse = async () => {
      const response = await (await fetch(`https://api.github.com/users/${userName}`)).json()
      setAbout(prevState => {
        return {
          ...prevState,
          company: response.company,
          location: response.location,
          twitter: response.twitter_username,
          website: response.blog,
        }
      });
      setData(prevState => {
        return {
          ...prevState,
          followers: response.followers,
          following: response.following,
          img: response.avatar_url,
          login: response.login,
          name: response.name,
          repos: response.public_repos
        }
      })
    }

    getResponse()
  }, [userName])
  
  return (
    <>
      <TopStyled>
        <div className="container">
          <div className="top-content">
            <h2>devfinder</h2>
            <button className="changeTheme"> dark <img src="" alt="" /> </button>
          </div>
          <div className="form">
            <Form onSubmit={(e) => {
              e.preventDefault()
              setUserName(inputValue)
            }}>
              <fieldset>
              <legend className="sr-only">Enter the username you want to search for</legend>

              <label htmlFor="name">
                <svg height="24" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z" fill="#0079ff"/></svg>
              </label>
              
              <InputText placeholder="Search GitHub username..." name="name" id="name" value={inputValue} onChange={(e) => {
                setInputValue(e.currentTarget.value)
                console.log(inputValue)
              }}/>

              <button type="submit">Search</button>

              </fieldset>
            </Form>
          </div>
        </div>
      </TopStyled>
      <MainStyled>
        <section className="details">
          <div className="image-profile">
            <img src={data.img ? data.img : "#"} alt="" aria-hidden="true" className="img"/>
          </div>
          <div className="container">
            <div className="infos">
              <div className="info">
                <h2 className="name">{data.name ? data.name : "Not Available"}</h2>
                <p className="user">{data.login ? `@${data.login}` : "Not Available"}</p>
              </div>
              <p className="joined">Joined 25 jan 2011</p>
            </div>

            <p className="description">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
            </p>

            <div className="statistic">
              <div className="repos">
                <p>Repos
                  <span className="num_repos">{data.repos ? data.repos : "Not Available"}</span>
                </p>
              </div>
              <div className="followers">
                <p>Followers
                  <span className="num_">{data.followers ? data.followers : "Not Available"}</span>
                </p>
              </div>
              <div className="following">
                <p>Following
                  <span className="num_following">{data.following ? data.following : "Not Available"}</span>
                </p>
              </div>
            </div>

            <div className="about">
              <div className="location">
                <img src={imgLocation} alt="" aria-hidden="true"/>
                <p>{about.location ? about.location : "Not Available"}</p>
              </div>
              <div className="tt">
                <img src={imgTwitter} alt="" aria-hidden="true" />
                <p>{about.twitter ? about.twitter : "Not Available"}</p>
              </div>
              <div className="website">
                <img src={imgWebSite} alt="" aria-hidden="true" />
                <a href={about.website ? about.website : ""} aria-label="go to website">{about.website ? about.website : "Not Available"}</a>
              </div>
              <div className="company">
                <img src={imgCompany} alt="" aria-hidden="true" />
                <p>{about.company ? about.company : "Not Available"}</p>
              </div>
            </div>
          </div>
        </section>
      </MainStyled>
    </>
  );
};