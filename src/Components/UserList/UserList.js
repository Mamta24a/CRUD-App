import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button } from "react-bootstrap";
import { fetchUserListApi } from "../../actions/userAction";

class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userList: [],
            loading: false
        };
    }

    componentDidMount() {
        this.props.fetchUserListApi();
    }

    render() {
        let { userList, loading } = this.props.userState;
        console.log(userList);

        return (
            <div>
                <h3 className="heading">User List</h3>

                <div className="divBox">
                    <a href={"/create-user"}>
                        <Button
                            // onClick={this.props.history.push('/create-user')}
                            variant="secondary"
                            size="sm"
                            className="float-right"
                        >
                            Add User
                        </Button>
                    </a>
                </div>

                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Roles</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? "Loading..." :
                            userList.map((user) => (
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.roles}</td>
                                    <td>{user.mobile}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { userState: state.userState }
}

const mapActionsToProps = {
    fetchUserListApi: fetchUserListApi
}

export default connect(mapStateToProps, mapActionsToProps)(UserList);