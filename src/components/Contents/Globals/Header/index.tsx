import React from "react";
import { Menu } from "@material-ui/icons";
import TextSearch from "../../Inputs/TextSearch";
import { Grid } from "@material-ui/core";


type Props = {
  actions: {
    clickMenu: any;
  }
}

const Header: React.FC<Props> = ({actions}) => {
  return (
    <Grid container  style={{backgroundColor: '#E4E4E4'}}>
      <Grid item xs={2} style={{display: 'table', height: '100%'}}>
        <Menu fontSize="large" style={{margin: '16px', display: 'table-cell', verticalAlign: 'middle', cursor: 'pointer'}} onClick={actions.clickMenu}/>
      </Grid>
      <Grid item xs={8}>
        <TextSearch label={"検索"} placeholder={"製品名を入力してください"} fullWidth={true} />
      </Grid>
    </Grid>
  );
};

export default Header;
