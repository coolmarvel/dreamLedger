import React, { Component } from 'react';
import StudentInfoField from "./StudentInfoField";
import {useSelector} from "react-redux";
import StudentSearchField from "./StudentSearchField";


class StudentSearchFieldList extends Component {

    render() {

        const { search_member,onChange,onSearch} = this.props;
        return (
            <div>
                <StudentSearchField
                    // key={search_member.}
                    search_member={search_member}
                    onChange={onChange}
                    onSearch={onSearch}
                />
            </div>
        );
    }
}

export default StudentSearchFieldList;
