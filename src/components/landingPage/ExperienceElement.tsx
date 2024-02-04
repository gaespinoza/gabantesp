import { Icon } from "@iconify/react";
import React from "react";
import {Button} from "@nextui-org/button";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/modal";


type ExperienceElementProps = {
    icon: JSX.Element,
    content?: string,
    name: string,
    proficiency?: string
}

export default function ExperienceElement({icon, content, name, proficiency}: ExperienceElementProps) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    let element = <div className="flex">
                    {icon} <p className="px-1 font-mono">{name}</p>
                </div>
    if (proficiency || content) {
        element = 
        <Button onPress={onOpen}>
            {icon} <p className="px-1 font-mono">{name}</p>
        </Button>
    }
    return (
        <div>
            {element}
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{name}</ModalHeader>
                            <ModalBody>
                                {proficiency ? <p>Proficiency: {proficiency}</p> : null}
                                {content ? <p>{content}</p> : null}
                            </ModalBody>
                            <ModalFooter>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            
        </div>
    )
}

const LanguagesList: ExperienceElementProps[] = [
    {
        icon: <Icon icon="logos:python" width="24" height="24"/>,
        name: "Python",
        proficiency: "Professional",
        content: "Python is my strongest language. I've used python to create custom modules packaged by Poetry. I've extensivly used Python in Apache Airflow to write DAGs and handle data validation, manipulation and DB updating. I have written applications with Flask and Django using Python."
    },
    {
        icon: <Icon icon="logos:java" width="24" height="24"/>,
        name: "Java",
        proficiency: "Advanced",
        content: "I have written multiple APIs using JAVA. I've built rate limiting classes, handled Request Data validation, designed input, output, and exceptions for different request routing in Java projects. I have written database schemas and java models to interact with and handle data flows."
    },
    {
        icon: <Icon icon="skill-icons:javascript" width="24" height="24"/>,
        name: "JavaScript",
        proficiency: "Upper Intermediate",
        content: "I have worked with JS through personal projects and some professional experience. I have written Node backend systems using Sequelize and Express. I have written React front end applications manipulating GeoJson data. I've written APIs and DB queries"
    },
    {
        icon: <Icon icon="skill-icons:typescript" width="24" height="24"/>,
        name: "TypeScript",
        proficiency: "Upper Intermediate",
        content: "In order to practice better coding standards, I have migrated all my previous JS projects into TypeScript, enforcing type checking and writing cleaner code. Through my experiences in Java and other typed langauges, applying the same logic and practices are intuitve and clean"
    },
    {
        icon: <Icon icon="tabler:sql" width="24" height="24" />,
        name: "SQL",
        proficiency: "Upper Intermediate",
        content: "In all the applications I have worked with, querying databases to collect, put or manipulate data is always a requirement. When writing my code I always have in mind when and how database interaction should take place and what that will look like. I have worked on schema creations for new tables, associations with other tables, handling race conditions with applicaitons and resiliency."
    },
    {
        icon: <Icon icon="logos:scala" width="24" height="24"/>,
        name: "Scala",
        proficiency: "Functional",
        content: "In a previous project, I worked on a Validator jar running on EMR that utilized Scala packages. I wrote Scala unit testing and validation workflow"
    },
    {
        icon: <Icon icon="logos:c" width="24" height="24"/>,
        name: "C",
        proficiency: "Functional",
    },
    {
        icon: <Icon icon="logos:c-plusplus" width="24" height="24"/>,
        name: "C++",
        proficiency: "Functional",
    }

]

const FrameworksList: ExperienceElementProps[] = [
    {
        icon: <Icon icon="simple-icons:flask" width="24" height="24"/>,
        name: "Flask",
    },
    {
        icon: <Icon icon="simple-icons:django" width="24" height="24"/>,
        name: "Django",
    },
    {
        icon: <Icon icon="logos:react" width="24" height="24"/>,
        name: "React",
    },
    {
        icon: <Icon icon="teenyicons:nextjs-outline" width="24" height="24"/>,
        name: "Next.js",
    },
    {
        icon: <Icon icon="simple-icons:express" width="24" height="24"/>,
        name: "Express.js",
    },
    {
        icon: <Icon icon="logos:sequelize" width="24" height="24"/>,
        name: "Sequelize",
    },
    {
        icon: <Icon icon="devicon:spring" width="24" height="24"/>,
        name: "Spring",
    },

]
const TechnologiesList: ExperienceElementProps[] = [
    {
        icon: <Icon icon="logos:aws" width="24" height="24"/>,
        name: "AWS",
        content: "I hold AWS Cloud Practitioner certification, and have worked on production applications utilizing EKS, EMR, KMS keys, S3 buckets, IAM roles, Lambda functions, Aurora RDS, and load balancing. I have made multiple deployments via service catalog and Terraform"
    },
    {
        icon: <Icon icon="devicon:terraform" width="24" height="24"/>,
        name: "Terraform",
        content: "I hold a Hashicorp Terraform certification. In internal professional projects, I have worked on terraform deployment patterns and blueprints for hundreads of clients to use, where they may deploy the required infrastrcuture they need to run our cloud based applications."
    },
    {
        icon: <Icon icon="skill-icons:gcp-light" width="24" height="24"/>,
        name: "GCP",
    },
    {
        icon: <Icon icon="logos:postgresql" width="24" height="24"/>,
        name: "Postgres",
        content: "I have written and contributed to many apps utilizing a Postgres DB, both on and off the cloud. In langauges such as Python and Typescript"
    },
    {
        icon: <Icon icon="devicon:mysql" width="24" height="24"/>,
        name: "MySQL",
    },
    {
        icon: <Icon icon="devicon:jenkins" width="24" height="24"/>,
        name: "Jenkins",
    },
    {
        icon: <Icon icon="logos:spinnaker" width="24" height="24"/>,
        name: "Spinnaker",
    },
    {
        icon: <Icon icon="logos:kubernetes" width="24" height="24"/>,
        name: "Kubernetes",
        content: "A primary professional project I worked on involved K8s deployments onto AWS's EKS service. For these Kubernetes deploymentes I needed to create Docker files, handle K8s roles and permissions, and debug, diagnose any networking or infrastrucutre issue with our kubernetes application. Some cases would require manual kubeclt logging into deployments and different containers to resolve any issues. I also worked on the creation of our deployments kustomization file and all other assoicatied configuration (netpol-fqdn, deployment.yml)"
    },
    {
        icon: <Icon icon="vscode-icons:file-type-docker" width="24" height="24"/>,
        name: "Docker",
        content: "I wrote docker files for our deployment configurations, to be used as a base image for all deployments our clients do"
    },
    {
        icon: <Icon icon="devicon:apacheairflow" width="24" height="24"/>,
        name: "Apache Airflow",
        content: "The confluence of my work centered around bring all the pieces of a distributed system together to create an Apache Airflow deployment model for our clients to use. Through this, data migration and validation was facilitated."
    },
    {
        icon: <Icon icon="devicon:poetry" width="24" height="24"/>,
        name: "Poetry",
        content: "I have used Poetry to manage package dependencies in a authorization token fetching module I created. In this module, given credentials, a client can facilitate collection of a centrally sourced credential and automatically use a third party service which required authorization. Poetry helped maintain the build time, run time and testing suite of the module."
    },
    {
        icon: <Icon icon="skill-icons:html" width="24" height="24"/>,
        name: "HTML",
    },
]
export { LanguagesList, FrameworksList, TechnologiesList};
export type {ExperienceElementProps};