import { Button, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import * as React from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import PropTypes from 'prop-types';

import CssBaseline from '@material-ui/core/CssBaseline';



interface Props extends RouteComponentProps<void> {}

function UnStarComponent(props: Props) {

	const { container } = props;
	const classes = useStyles();
	const theme = useTheme();



	return (
		<div className={classes.root}>
		<CssBaseline />

		<main className={classes.content}>
		  <div className={classes.toolbar} />
		  <Typography paragraph>
			This is UnStar Component Renderd
		  </Typography>
		  <Typography paragraph>
			Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
			facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
			tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
			consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
			vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
			hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
			tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
			nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
			accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
		  </Typography>
		</main>
	  </div>
	);
}

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
	root: {
	  display: 'flex',
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
	  width: drawerWidth,
	},
	content: {
	  flexGrow: 1,
	  padding: theme.spacing(3),
	},
}));

UnStarComponent.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
  };

export default UnStarComponent;
