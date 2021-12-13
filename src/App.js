import "./App.css";
import React, { useState, useRef } from "react";
import { Table, Input, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "../node_modules/antd/dist/antd.css";

const App = () => {
  // TO SET FINE ON STUDENT
  const [fine, setFine] = useState();
  // TO GET USER'S INPUT FROM TEXT BOX(SEARCH BOX)
  const [userInput, setUserInput] = useState("");
  const searchInput = useRef(null);
  // FOR 1st INPUT FIELD IN-BETWEEN RANGE FILTER
  const [firstInput, setFirstInput] = useState();
  // FOR 2nd INPUT FIELD IN-BETWEEN RANGE FILTER
  const [secondInput, setSecondInput] = useState();

  // STUDENT'S DATA
  let student = [
    {
      rollNo: 1,
      name: "Rohit",
      fatherName: "Lalit",
      motherName: "Abha",
      age: 22,
      marks: 54,
      address: "Delhi",
      attendance: 95,
      contact: 7097991361,
    },
    {
      rollNo: 2,
      name: "Rohan",
      fatherName: "Ram",
      motherName: "Akanksha",
      age: 23,
      marks: 60,
      address: "Mumbai",
      attendance: 56,
      contact: 7097775553,
    },
    {
      rollNo: 3,
      name: "Ishfaq",
      fatherName: "Maqbool",
      motherName: "Amala",
      age: 24,
      marks: 49,
      address: "Chennai",
      attendance: 83,
      contact: 7097891779,
    },
    {
      rollNo: 4,
      name: "Sanjay",
      fatherName: "Ramesh",
      motherName: "Aditi",
      age: 24,
      marks: 44,
      address: "Mohali",
      attendance: 55,
      contact: 7097683032,
    },
    {
      rollNo: 5,
      name: "Anuj",
      fatherName: "Narayan",
      motherName: "Amita",
      age: 23,
      marks: 56,
      address: "Delhi",
      attendance: 60,
      contact: 7097574082,
    },
    {
      rollNo: 6,
      name: "Shubam",
      fatherName: "Kulbhushan",
      motherName: "Ananda",
      age: 24,
      marks: 74,
      address: "Hyderabad",
      attendance: 75,
      contact: 7097431470,
    },
    {
      rollNo: 7,
      name: "Asif",
      fatherName: "Aijaz",
      motherName: "Amrita",
      age: 21,
      marks: 89,
      address: "Ahmedabad",
      attendance: 80,
      contact: 7097362772,
    },
    {
      rollNo: 8,
      name: "Avinash",
      fatherName: "Mahesh",
      motherName: "Anima",
      age: 21,
      marks: 39,
      address: "Bangalore",
      attendance: 82,
      contact: 7097228452,
    },
    {
      rollNo: 9,
      name: "Waseem",
      fatherName: "Bashir",
      motherName: "Anjali",
      age: 20,
      marks: 66,
      address: "Delhi",
      attendance: 34,
      contact: 7097145472,
    },
    {
      rollNo: 10,
      name: "Nakul",
      fatherName: "Narain",
      motherName: "Dipali",
      age: 23,
      marks: 90,
      address: "Noida",
      attendance: 8,
      contact: 7097048837,
    },
    {
      rollNo: 11,
      name: "Parush",
      fatherName: "Viniak",
      motherName: "Ankita",
      age: 22,
      marks: 88,
      address: "Surat",
      attendance: 67,
      contact: 7035979058,
    },
    {
      rollNo: 12,
      name: "Narinder",
      fatherName: "Anil",
      motherName: "Anushka",
      age: 22,
      marks: 56,
      address: "Jaipur",
      attendance: 73,
      contact: 7035849432,
    },
    {
      rollNo: 13,
      name: "Rajinder",
      fatherName: "Charanjeev",
      motherName: "Anuja",
      age: 21,
      marks: 83,
      address: "Lucknow",
      attendance: 44,
      contact: 7035782980,
    },
    {
      rollNo: 14,
      name: "Pyuish",
      fatherName: "Satish",
      motherName: "Archana",
      age: 20,
      marks: 55,
      address: "Kanpur",
      attendance: 32,
      contact: 7035698068,
    },
    {
      rollNo: 15,
      name: "Tushar",
      fatherName: "Kishore",
      motherName: "Arundhati",
      age: 22,
      marks: 45,
      address: "Nagpur",
      attendance: 29,
      contact: 7035581539,
    },
    {
      rollNo: 16,
      name: "Zaid",
      fatherName: "Mushtaq",
      motherName: "Asha",
      age: 22,
      marks: 35,
      address: "Indore",
      attendance: 98,
      contact: 7035464140,
    },
    {
      rollNo: 17,
      name: "Mayank",
      fatherName: "Veer",
      motherName: "Avani",
      age: 19,
      marks: 95,
      address: "Bhopal",
      attendance: 11,
      contact: 7035350597,
    },
    {
      rollNo: 18,
      name: "Kamran",
      fatherName: "Ahmed",
      motherName: "Bala",
      age: 20,
      marks: 80,
      address: "Patna",
      attendance: 2,
      contact: 7035299090,
    },
    {
      rollNo: 19,
      name: "Suraj",
      fatherName: "Vinod",
      motherName: "Bharati",
      age: 22,
      marks: 60,
      address: "Ludhiana",
      attendance: 82,
      contact: 7035156241,
    },
    {
      rollNo: 20,
      name: "Abhinav",
      fatherName: "Rattan",
      motherName: "Chandani",
      age: 21,
      marks: 80,
      address: "Agra",
      attendance: 73,
      contact: 7035081979,
    },
    {
      rollNo: 21,
      name: "Anubhav",
      fatherName: "Devinder",
      motherName: "Chandana",
      age: 22,
      marks: 70,
      address: "Ranchi",
      attendance: 42,
      contact: 7277214340,
    },
    {
      rollNo: 22,
      name: "Unmukat",
      fatherName: "Rajinder",
      motherName: "Chandra",
      age: 20,
      marks: 55,
      address: "Faridabad",
      attendance: 39,
      contact: 7277131415,
    },
    {
      rollNo: 23,
      name: "Rahul",
      fatherName: "Naresh",
      motherName: "Chandrakanta",
      age: 21,
      marks: 40,
      address: "Rajkot",
      attendance: 26,
      contact: 7277064329,
    },
    {
      rollNo: 24,
      name: "Anmol",
      fatherName: "Ajay",
      motherName: "Chetana",
      age: 19,
      marks: 68,
      address: "Varanasi",
      attendance: 57,
      contact: 7274965197,
    },
    {
      rollNo: 25,
      name: "Owaise",
      fatherName: "Tayub",
      motherName: "Darshana",
      age: 21,
      marks: 85,
      address: "Amritsar",
      attendance: 84,
      contact: 7274829756,
    },
    {
      rollNo: 26,
      name: "Shaffi",
      fatherName: "Mohsin",
      motherName: "Deepti",
      age: 20,
      marks: 65,
      address: "Allahabad",
      attendance: 12,
      contact: 7274052160,
    },
    {
      rollNo: 27,
      name: "Aadil",
      fatherName: "Rehman",
      motherName: "Devika",
      age: 21,
      marks: 74,
      address: "Gwalior",
      attendance: 68,
      contact: 7273976856,
    },
    {
      rollNo: 28,
      name: "Ajaz",
      fatherName: "Ganai",
      motherName: "Deepika",
      age: 21,
      marks: 53,
      address: "Jodhpur",
      attendance: 46,
      contact: 7273841779,
    },
    {
      rollNo: 29,
      name: "Yash",
      fatherName: "Gautam",
      motherName: "Deepshikha",
      age: 22,
      marks: 75,
      address: "Raipur",
      attendance: 20,
      contact: 7273017414,
    },
    {
      rollNo: 30,
      name: "Gaurav",
      fatherName: "Kamaljeet",
      motherName: "Divya",
      age: 22,
      marks: 62,
      address: "Guwahati",
      attendance: 39,
      contact: 7272925505,
    },
  ];

  // TO FILTER STUDENT FROM WHOLE DATA WHEN SEARCHED BY NAME, FATHER NAME OR MOTHER NAME
  const [searchStu, setSearchStu] = useState(student);

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: () => (
      <div style={{ padding: 8 }}>
        {/* 1st INPUT FIELD IN A RANGE FILTER */}
        <Input
          type={
            dataIndex === "age"
              ? "number"
              : dataIndex === "marks"
              ? "number"
              : dataIndex === "attendance"
              ? "number"
              : "hidden"
          }
          ref={searchInput}
          placeholder={"Search from"}
          value={firstInput}
          onChange={(e) => setFirstInput(e.target.value)}
          onPressEnter={() => handleSearch(firstInput)}
          style={{ marginBottom: 8, display: "block" }}
        />
        {/* 2nd INPUT FIELD IN A RANGE FILTER */}
        <Input
          type={
            dataIndex === "age"
              ? "number"
              : dataIndex === "marks"
              ? "number"
              : dataIndex === "attendance"
              ? "number"
              : dataIndex === "contact"
              ? "number"
              : "text"
          }
          ref={searchInput}
          placeholder={
            dataIndex === "age"
              ? ("number", "Search to")
              : dataIndex === "marks"
              ? ("number", "Search to")
              : dataIndex === "attendance"
              ? ("number", "Search to")
              : ("text", `Search ${dataIndex}`)
          }
          value={secondInput}
          onChange={(e) => setSecondInput(e.target.value)}
          onPressEnter={() => handleSearch(secondInput)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          {/* SEARCH BUTTON FOR SEARCH RESULT(S) IN-BETWEEN A RANGE */}
          <Button
            type="primary"
            onClick={() => handleSearch(firstInput, secondInput)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          {/* RESET BUTTON TO RESET INPUT FIELDS TO EMPTY */}
          <Button
            onClick={() => handleReset()}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          {/* FILTER TEXT FOR SEARCH RESULT(S) IN-BETWEEN A RANGE(WORK LIKE SAME AS SEARCH BUTTON DOING) */}
          <Button
            type="link"
            size="small"
            onClick={() => {
              handleSearch(firstInput, secondInput);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    // FOR GRAPHICAL PRESENTATION OF SEARCH ICON
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
  });

  // FOR SHOWING RESULT(S) IN-BETWEEN RANGE WHEN SEARCHED
  const handleSearch = (firstInput, secondInput, dataIndex) => {
    setSearchStu(
      student.filter((obj) => {
        let stuAge = obj.age;
        let stuMarks = obj.marks;
        let stuAttendance = obj.attendance;

        if (dataIndex === "age") {
          if (stuAge >= firstInput && stuAge <= secondInput) {
            return true;
          } else {
            return false;
          }
        } else {
          if (dataIndex === "marks") {
            if (stuMarks >= firstInput && stuMarks <= secondInput) {
              return true;
            } else {
              return false;
            }
          } else {
            if (dataIndex === "attendance") {
              if (stuAttendance >= firstInput && stuAttendance <= secondInput) {
                return true;
              } else {
                return false;
              }
            } else {
              return false;
            }
          }
        }
      })
    );
  };

  // TO RESET THE INPUT FIELDS TO EMPTY WHEN SEARCHING IN-BETWEEN RANGE
  const handleReset = () => {
    return setFirstInput(""), setSecondInput("");
  };

  //  LIST OF COLUMNS WHICH WE WANT TO SHOW IN OUR ANTD TABLE
  const columns = [
    {
      title: "Roll No.",
      dataIndex: "rollNo",
      key: "rollNo",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Father Name",
      dataIndex: "fatherName",
      key: "fatherName",
      ...getColumnSearchProps("fatherName"),
    },
    {
      title: "Mother Name",
      dataIndex: "motherName",
      key: "motherName",
      ...getColumnSearchProps("motherName"),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      ...getColumnSearchProps("age"),
      sorter: (a, b) => a.age - b.age,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Marks",
      dataIndex: "marks",
      key: "marks",
      ...getColumnSearchProps("marks"),
      sorter: (a, b) => a.marks - b.marks,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      ...getColumnSearchProps("address"),
    },
    {
      title: "Attendance",
      dataIndex: "attendance",
      key: "attendance",
      ...getColumnSearchProps("attendance"),
      sorter: (a, b) => a.attendance - b.attendance,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Fine",
      dataIndex: "fine",
      key: "fine",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
      ...getColumnSearchProps("contact"),
    },
  ];

  // FUNCTION TO SET FINE AND STATUS ACCORDING TO ATTENDANCE
  const fineAndStatus = () => {
    let fixedFineAmount = 1000;
    setFine(
      student.filter((obj) => {
        if (obj.attendance >= 75) {
          obj.status = "Eligible";
        } else {
          if (obj.attendance < 75 && obj.attendance >= 30) {
            obj.fine = (obj.attendance * fixedFineAmount) / 100;
            obj.status = "Eligible";
          } else {
            if (obj.attendance < 30) {
              obj.status = "Not Eligible";
            }
          }
        }
      })
    );
  };

  return (
    <div>
      {/* A TEXT BOX(SEARCH BOX) ALLOWING END USER TO ENTER SOMETHING FOR SEARCH  */}
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Search here"
        style={{ marginBottom: 8, marginRight: 8 }}
        id="myTextbox"
      />
      {/* A BUTTON TO FILTER STUDENT BY NAME, FATHER NAME OR MOTHER NAME WHEN SEARCHED */}
      <input
        type="submit"
        value="Search"
        style={{ marginBottom: 8 }}
        onClick={() => {
          // FILTERING STUDENT BY NAME, FATHER NAME OR MOTHER NAME WHEN SEARCHED IN TEXT BOX(SEARCH BOX)
          setSearchStu(
            // Method 1: for exact match from data what user enters by converting into lower case.
            /*student.filter((obj) => {
              return (
                obj.name.toLowerCase() === userInput.toLowerCase() ||
                obj.fatherName.toLowerCase() === userInput.toLowerCase() ||
                obj.motherName.toLowerCase() === userInput.toLowerCase()
              );
            })*/
            // Method 2: for fetch data that includes characters/word entered in search box.
            // type-casting(toLowerCase()) is done below because .include() is case-sensitive. so we need to change to lower or upper case.
            student.filter((obj) => {
              let userName = userInput.trim().toLowerCase();
              return (
                obj.name.toLowerCase().includes(userName) ||
                obj.fatherName.toLowerCase().includes(userName) ||
                obj.motherName.toLowerCase().includes(userName)
              );
            })
          );
          // DISABLING SHOWING FINE AND STATUS ON-CLICK OF SEARCH BUTTON WHEN THERE IS NOTHING IN TEXT BOX(SEARCH BOX)
          return userInput ? fineAndStatus() : searchStu;
        }}
      />
      {/* A RESET BUTTON FOR SETTING TEXT BOX(SEARCH BOX) TO EMPTY AND DISPLAYING THE WHOLE DATA AS IT WAS INITIALLY SET */}
      <input
        type="submit"
        value="Reset"
        style={{ marginBottom: 8, marginLeft: 8 }}
        onClick={() => {
          setSearchStu(student);
          setUserInput("");
        }}
      />
      {/* FOR SHOWING ANTD TABLE WITH COLUMNS AND DATA WHEN APP LAUNCHES(EVERY TIME) */}
      <Table columns={columns} dataSource={searchStu} />
    </div>
  );
};
export default App;
