'use client';

import NavTabs from "../components/nav-tabs"
import ForYou from "../components/for-you"
import Projects from "../components/projects"
import Achievements from "../components/achievements"
import Blog from "../components/blog"
import { useState } from "react"

const Homepage = () => {
  const [activeTab, setActiveTab] = useState("for-you");

  let Content;
  if (activeTab === "projects") {
    Content = <Projects/>;
  }
  else if (activeTab === "achievements") {
    Content = <Achievements/>;
  }
  else if (activeTab === "blog") {
    Content = <Blog/>;
  }
  else {
    Content = <ForYou/>;
  }

  return (
    <div>
      <NavTabs activeTab={activeTab} onTabChange={setActiveTab}/>
      {Content}
    </div>
    
  )
}

export default Homepage