import React, { Component } from "react";
import StudentInfoField from "./StudentInfoField";
import { useSelector } from "react-redux";

class StudentInfoFieldList extends Component {
  render() {
    const {
      member,
      student,
      editing,
      onChange,
      onSubChange,
      onChangeImgFile,
      onSave,
    } = this.props;
    return (
      <div>
        <StudentInfoField
          key={member.id}
          member={member}
          student={student}
          editing={editing}
          onChange={onChange}
          onSubChange={onSubChange}
          onChangeImgFile={onChangeImgFile}
          onSave={onSave}
        />
      </div>
    );
  }
}

export default StudentInfoFieldList;
