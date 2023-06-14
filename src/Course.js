import {useState} from "react";
import db from "./CourseConfig";
import {ref, set} from "firebase/database";

export default function Course()
{

	const [name, setName] = useState("");
	const [python, setPython] = useState(false);
	const [java, setJava] = useState(false);
	const [js, setJs] = useState(false);

	const hName = (event) => {setName(event.target.value);}
	const hPython = (event) => {setPython(!python);}
	const hJava = (event) => {setJava(!java);}
	const hJs = (event) => {setJs(!js);}

	const save = (event) => {
		event.preventDefault();
		let course = "";
		if (python) 			course += "Python";
		if (java) 			course += "Java";
		if (js)				course += "Js";
		let data = {name, course};
		let node = name + "" + new Date().toString();
		let r = ref(db, "course/" + node);
		set(r,data);
		alert(data);
		setName("");
		setPython(false);
		setJava(false);
		setJs(false);

	}

	return(
	<>
	<center>
	<h1> Courses that you know </h1>
	<form onSubmit={save}>
	<input type="text"  placeholder="enter ur name"
	onChange={hName} value={name} />
	<br/><br/>
	<input type ="checkbox" value="python"
	onChange={hPython} checked={python} /> Python
	<input type ="checkbox" value="java"
	onChange={hJava} checked={java} /> Java
	<input type ="checkbox" value="js"
	onChange={hJs} checked={js} /> JS
	<br/><br/>
	<input type = "submit"/>
	</form>
	</center>
	</>
	);
}
