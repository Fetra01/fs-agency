import React from 'react';
import Navigation from '../components/Navigation';
import ButtonBottom from '../components/ButtonsBottom';
import Logo from '../components/Logo';
import Project from '../components/Project';
import Mouse from '../components/Mouse';

export const Project1 = () => {
    return(
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={0} />
                <ButtonBottom left={"/"} right={"/projet-2"} />
            </div>
        </main>
    );
} 

export const Project2= () => {
    return(
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={1} />
                <ButtonBottom left={"/projet-1"} right={"/projet-3"} />
            </div>
        </main>
    );
} 

export const Project3 = () => {
    return(
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={2} />
                <ButtonBottom left={"/projet-2"} right={"/projet-4"} />
            </div>
        </main>
    );
} 

export const Project4 = () => {
    return(
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={3} />
                <ButtonBottom left={"/projet-3"} right={"/contact"} />
            </div>
        </main>
    );
} 