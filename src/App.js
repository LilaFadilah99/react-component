import "./App.css";
// import component
import Avatar from "./components/avatar/Avatar";
import StudentInfo from "./components/studentInfo/StudentInfo";
// import gambar
import avatar from "./assets/avatar1.jpg";
import avatar2 from "./assets/avatar2.jpg";

function App() {
  // State
  // Data dapat ditampung dalam variable terlebih dahulu
  let name = "udin";
  let status = "Student coding Amman";
  let bio = "sangat tertarik dengan React.js";

  return (
    <div className="App">
      <Avatar src={avatar} />
      <StudentInfo name={name} status={status} bio={bio} size="10px" />
      <Avatar src={avatar2} />
      {/* style untuk component dapat di custom dan dikirim melalui props */}
      <StudentInfo name={"mahmud"} status={"Alumni terbaik Amman batch 2"} bio={"sangat telaten dalam coding"} size="30px" backgroundColor={"red"} />
    </div>
  );
}

export default App;
