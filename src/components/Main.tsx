import { MainStyled } from "../styles/MainContent";
import imgLocation from "../assets/icon-location.svg";
import imgTwitter from "../assets/icon-twitter.svg";
import imgWebSite from "../assets/icon-website.svg";
import imgCompany from "../assets/icon-company.svg";
import { TopStyled } from "../styles/MainTopContent";
import { FormEventHandler, FunctionComponent, ReactNode, useEffect,useState } from "react";

interface FormProps {
  onSubmit: FormEventHandler<HTMLFormElement> | undefined,
  children: ReactNode,
}

interface InputProps {
  value?: string,
  name?: string,
  placeholder?: string,
  id?: string,
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined,
}

const InputText: FunctionComponent<InputProps> = ({ onChange }) => {
  return (<input onChange={onChange} placeholder="Search GitHub username..." name="name" id="name" type="text"/>) 
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
  date?: string | undefined
};

interface Data {
  name: string | undefined,
  login: string | undefined,
  img: string | undefined,
  repos: string | undefined, 
  followers: number | string,
  following: number | string,
  description: string,
};

interface MainProps {
  themeToggler: () => void,
}

export const Main: FunctionComponent<MainProps> = ({ themeToggler }) => {
  
  const [about, setAbout] = useState<About>({
    company: "",
    location: "",
    twitter: "",
    website: "",
    date: ""
  });

  const [data, setData] = useState<Data>({
    followers: "",
    following: "", 
    img: "",
    login: "",
    name: "",
    repos: "",
    description: "",
  });
  
  const [userName, setUserName] = useState<string>("octocat");
  const [inputValue, setInputValue] = useState<string>("");
  const [classError, setClassError] = useState<string>("")

  useEffect(() => {
    const getResponse = async () => {
      const response = await (await fetch(`https://api.github.com/users/${userName}`)).json()
      
      if (response.message === "Not Found") {
        setClassError("active")
      } else {
        setClassError("")
        const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];
    
        const dataDay = new Date(`${response.created_at}`).getDate()
        const dataMonth = new Date(`${response.created_at}`).getMonth()
        const dataYear = new Date(`${response.created_at}`).getFullYear()
    
        const formattedDate = `${dataDay} ${months[dataMonth]}  ${dataYear}`

        setAbout(prevState => {
          return {
            ...prevState,
            company: response.company,
            location: response.location,
            twitter: response.twitter_username,
            website: response.blog,
            date: `Joined ${formattedDate}`
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
        });
      }
    };
    getResponse();
  }, [userName]);

  const [currentTheme, setCurrentTheme] = useState<string>("LIGHT"); 

  return (
    <>
      <TopStyled>
        <h1 className="sr-only">the dev finder</h1>
        <div className="container">
          <div className="top-content">
            <a href="/" aria-label="main-app">devfinder</a>
            <button className="changeTheme" onClick={() => {
              themeToggler() 
              currentTheme === "LIGHT" ? setCurrentTheme("DARK") : setCurrentTheme("LIGHT")      
            }}>{currentTheme}</button>
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
              
              <InputText value={inputValue} onChange={(e) => {
                setInputValue(e.currentTarget.value)
                console.log(inputValue)
              }}/>

              <span id="err" className={classError}>No results</span>

              <button aria-label="search user" type="submit">Search</button>

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
              <p className="joined">{about.date ? about.date : "Joined 25 jan 2011"}</p>
            </div>

            <p className="description">
              {data.description ? data.description : 'This profile has no bio'}
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
                <a target="_blank" href={about.twitter ? `https://twitter.com/${about.twitter}` : ""} aria-label={about.twitter ? "go to twitter" : ""} aria-disabled={about.twitter ? "false" : "true"} className={about.twitter ? "link" : "link-disabled"}>{about.twitter ? about.twitter : "Not Available"}</a>
              </div>

              <div className="website">
                <img src={imgWebSite} alt="" aria-hidden="true" />
                <a className={about.website ? "link" : "link-disabled"} target="_blank" href={about.website ? about.website : ""} aria-label={about.website ? "go to website" : ""} aria-disabled={about.website ? "false" : "true"}>{about.website ? about.website : "Not Available"}</a>
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