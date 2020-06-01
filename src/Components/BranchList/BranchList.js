import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button } from "react-bootstrap";
import { fetchBranchListApi } from "../../actions/branchAction";

class BranchList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            branchList: [],
            loading: false
        };
    }

    componentDidMount() {
        this.props.fetchBranchListApi();
    }

    render() {
        let { branchList, loading } = this.props.branchState;
        return (
            <div>
                <h3 className="heading">Branch List</h3>

                <div className="divBox">
                    <a href={"/create-branch"}>
                        <Button
                            // onClick={this.props.history.push('/create-branch')}
                            variant="secondary"
                            size="sm"
                            className="float-right"
                        >
                            Add Branch
                        </Button>
                    </a>
                </div>

                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Branch Code</th>
                            <th>Phone</th>
                            <th>City</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? "Loading..." :
                            branchList.map((branch) => (
                                <tr>
                                    <td>{branch.name}</td>
                                    <td>{branch.pincode}</td>
                                    <td>{branch.phone}</td>
                                    <td>{branch.city}</td>
                                    <td>
                                        <a href={"/create-user"}>
                                            <Button variant="secondary" size="sm">Add User</Button>
                                        </a>
                                    </td>
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
    return { branchState: state.branchState }
}

const mapActionsToProps = {
    fetchBranchListApi: fetchBranchListApi
}

export default connect(mapStateToProps, mapActionsToProps)(BranchList);