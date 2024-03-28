
import PathConstants from "./pathConstants.js"

const Index = import("../Index")
const Character = import("../Character")
const Contact = import("../Contact")
const Cv = import("../Cv")
const Hobbies = import("../Hobbies")
const License = import("../License")
const Links = import("../Links")


const routes = [
    { path: PathConstants.Index, element: <Index /> },
    { path: PathConstants.Character, element: <Character /> },
    { path: PathConstants.Contact, element: <Contact /> },
    { path: PathConstants.Cv, element: <Cv /> },
    { path: PathConstants.Hobbies, element: <Hobbies /> },
    { path: PathConstants.License, element: <License /> },
    { path: PathConstants.Links, element: <Links /> },
]

export default routes