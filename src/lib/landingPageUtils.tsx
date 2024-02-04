import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';
import PopOutImage from "@/components/PopOutImage";
import ExperienceElement, { ExperienceElementProps, LanguagesList, FrameworksList, TechnologiesList} from "@/components/landingPage/ExperienceElement";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { Divider } from '@nextui-org/divider';
import ResumeModal from "@/components/landingPage/ResumeModal";



export function Contact() {
    return (
        <>
            <div className="flex justify-center items-center">
                <p className="p-5">Let's connect!</p>
            </div>
            <SocialList/>
            <div>
                <p className="flex justify-center items-center">gabantesp [at] gmail [dot] com</p>
                <p className="flex justify-center items-center">+1 (571) - 643 - 3888</p>
            </div>
            <Divider/>
        </>
    )
}


export function About() {
    const [active, setActive] = useState<boolean>(false);

    return (
        <div className="rounded-lg">
            { active ?
                <>
                    <div className="flex justify-end content-end">
                        <Button size="sm" onClick={() => {setActive(!active)}}>X</Button>
                    </div>
                    <p className="text-center text-pretty">
                        Originally from Virginia, I now live in Fremont, Seattle, where I commute on my bike, run aroung Green Lake, explore trails by the water and the woods,
                        and enjoy life. I am a software engineer by profession and a creative by passion. I like staying on top of my projects, and getting ahead when I can.
                        When I'm not in downtown Seattle working, you can catch me watching LOTR, discovering a new trail, working on a side project or looking for bigfoot.  
                    </p>
                    <br/>
                    <p className="text-center text-pretty">
                        I enjoy learning about photography and expanding my technique in taking photos and capturing beautiful moments. I'm also a super amateur bicyclist, I don't know much
                        about the vernacular or culture but have a super fun time biking to work and using my bike as my medium of exploration in the area I live. I like talking about issues and histories,
                        I am a friend and ally to all people, and I would love to work together with anyone who may have the same vision for a more positive future for all people.
                    </p>
                    <div className="flex justify-center items-center">
                        <PopOutImage src={`https://storage.googleapis.com/${process.env.GOOGLE_BUCKET}/profile/IMG_7660.JPEG`}
                            alt="Orange Juice"
                        />
                        <PopOutImage src={`https://storage.googleapis.com/${process.env.GOOGLE_BUCKET}/profile/IMG_6846.JPEG`}
                            alt = "At the Pier"
                        />
                        <PopOutImage src={`https://storage.googleapis.com/${process.env.GOOGLE_BUCKET}/profile/IMG_2536.jpeg`}
                            alt = "Seeing Double"
                        />
                    </div>
                </>
                :
                
                <div className="flex justify-center items-center"> 
                    <Button onClick={() => setActive(!active)} className="p-10"> About Me </Button>
                </div>
                
            }
            
        </div>
    )
}


export function Experience() {
    const [list, setList] = useState<ExperienceElementProps[]>(LanguagesList)
    const [name, setName] = useState<string>("Languages")

    return (
        <div>
            <div >
                <div className="flex justify-center p-4">
                    <Dropdown>
                        <DropdownTrigger>
                            <Button variant="bordered">
                                {name}
                            </Button>
                        </DropdownTrigger>
                        <div className="bg-slate-500">
                            <DropdownMenu variant="faded" color="primary">
                                <DropdownItem key="language" onClick={() => {
                                    setList(LanguagesList);
                                    setName("Languauges");
                                }} >Languagues</DropdownItem>
                                <DropdownItem key="framework" onClick={() => {
                                    setList(FrameworksList);
                                    setName("Frameworks");
                                }} >Frameworks</DropdownItem>
                                <DropdownItem key="technology" onClick={() => {
                                    setList(TechnologiesList);
                                    setName("Technologies");
                                }} >Technologies</DropdownItem>

                            </DropdownMenu>
                        </div>
                        
                    </Dropdown>
                </div>
                <div className="grid grid-cols-2 gap-1">
                    {list.map((element, idx) => 
                        
                        <div key={idx}>
                            <ExperienceElement
                                icon={element.icon} 
                                content={element.content} 
                                name={element.name} 
                                key={element.name}
                                proficiency={element.proficiency}
                            />
                        </div>
                        
                    )}
                </div>
                </div>
        </div>
    )
}

export function Introduction() {

    const textToDisplay: string[] = [
        "taking some pictures",
        "out biking",
        "a software engineer @ JPMC",
        "a friend",
        "happy to be here",
        "a backend engineer",
        "a motivated learner",
        "a cloud engineer",
        "from Virginia"
    ]
    const [textIndex, setTextIndex] = useState<number>(0);
    const [displayedText, setDisplayedText] = useState<string>("");

    useEffect(() => {
        const intervalId = setInterval(() => {  //assign interval to a variable to clear it.
            setTextIndex((textIndex+1)%9);
            setDisplayedText(textToDisplay[textIndex]);
        }, 3000)
      
        return () => clearInterval(intervalId); //This is important
       
      }, [textIndex, setTextIndex, setDisplayedText])

    return (

        <div className="w-full h-60 rounded-lg">
            <div className="w-full flex justify-center">
                <p>Nice to meet you :)</p>
            </div>
            <div className="w-full flex justify-center p-5">
                <PopOutImage src={`https://storage.googleapis.com/${process.env.GOOGLE_BUCKET}/profile/IMG_8167.jpeg`}
                    alt="Sleeping Gabriel"
                />
                <PopOutImage src={`https://storage.googleapis.com/${process.env.GOOGLE_BUCKET}/profile/33_Original.jpeg`}
                    alt = "Gabriel"
                />
            </div>
            <div className="w-full flex justify-center">
                <p className="text-center">
                    My name is Gabriel, and I live in Seattle.<br />
                    I'm <span>{displayedText}</span>
                </p>
            </div>
            
            
            
        </div>
        

    )
}

export function SocialList() {
    type SocialList = {
        icon: JSX.Element,
        link: string
    }
    const socials: SocialList[] = [
        {
          icon: <Icon icon="logos:spotify-icon" width="24" height="24"/>,
          link: "https://open.spotify.com/user/elbookmaster?si=f8132673ac204f45"
        },
        {
          icon: <Icon icon="logos:linkedin-icon" width="24" height="24"/>,
          link: "https://www.linkedin.com/in/gabantesp/"
        },
        {
          icon: <Icon icon="logos:instagram-icon" width="24" height="24"/>,
          link: "https://www.instagram.com/venture.explore/"
        },
        {
          icon: <Icon icon="bi:strava" width="24" height="24"/>,
          link: "https://www.strava.com/athletes/75000112"
        },
        {
          icon: <Icon icon="arcticons:storygraph" width="24" height="24"/>,
          link: "https://app.thestorygraph.com/profile/gabriel_espinoza"
        },
        {
          icon: <Icon icon="simple-icons:leetcode" width="24" height="24"/>,
          link: "https://leetcode.com/gabantesp/"
        },
        {
            icon: <Icon icon="ion:logo-github" width="24" height="24"/>,
            link: "https://github.com/gaespinoza"
        }
      ]
      return (
        <div className={cn(
            `flex justify-center`
          )}>
            {socials?.map((social, idx) => {
                return (
                    <div 
                        className={cn(
                          `px-4`
                        )}
                        key={idx}>
                          <Link
                            key={idx}
                            href={social.link}
                            >
                            {social.icon}
                          </Link>
                    </div>
                );
            })
            }
        </div>
      )
}
