import React, {Component} from "react";
import ApartmentWidget from "./ApartmentWidget";
import {GridList} from "@material-ui/core";
import {GridListTile} from "@material-ui/core";


export default class ApartmentsTable extends Component{

    renderRows = (apartments) =>{
      let itemsPerRow = 3;

    };
    render() {
        const {apartments,onClick} = this.props;

        return(
            <div className='m-5'>
                <GridList cols={3}>
                    {apartments.map(apartment => {
                        return (
                            <GridListTile className='h-auto ' key={apartment._id}>
                                <ApartmentWidget apartment={apartment} onClick={onClick}/>
                            </GridListTile>
                        );
                    })}
                </GridList>
            </div>
            );
    }
}
