// prettier-ignore
import { AppBar, Badge, Divider, Drawer as DrawerMui, Hidden, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, withWidth } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import { isWidthUp, WithWidth } from "@material-ui/core/withWidth";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { connect } from "react-redux";
import { Route, RouteComponentProps, Router } from "react-router-dom";
import { history } from "./configureStore";
import { Todo, OneData, User } from "./model/model";
import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodoPage";

import OneComponent from "./pages/One/OneComponent";
import TwoComponent from "./pages/Two/TwoComponent";
import StarredComponent from "./pages/Starred/Star";
import UnStarredComponent from "./pages/Starred/UnStar";

import { RootState } from "./reducers/index";
import withRoot from "./withRoot";

import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
	palette: {
		primary: purple,
		secondary: {
		  main: '#f44336',
		},
	},
  });



function Routes() {
	const classes = useStyles();

	return (
		<div className={classes.content}>
			<Route exact={true} path="/" component={HomePage} />
			<Route exact={true} path="/home" component={HomePage} />
			<Route exact={true} path="/Home" component={HomePage} />
			<Route exact={true} path="/todo" component={TodoPage} />
			<Route exact={true} path="/one" component={OneComponent} />
				<Route exact={true} path="/one/Home" component={HomePage} />
				<Route exact={true} path="/one/Inbox" component={HomePage} />
				<Route exact={true} path="/one/Starred" component={HomePage} />
				<Route exact={true} path="/one/SendEmail" component={HomePage} />
				<Route exact={true} path="/one/Drafts" component={HomePage} />
				<Route exact={true} path="/one/AllMail" component={HomePage} />
				<Route exact={true} path="/one/Trash" component={HomePage} />
				<Route exact={true} path="/one/Spam" component={HomePage} />
			<Route exact={true} path="/two" component={TwoComponent} />
			<Route exact={true} path="/inbox/starred" component={StarredComponent} />
			<Route exact={true} path="/inbox/unstarred" component={UnStarredComponent} />
			<Route exact={true} path="/Home" component={HomePage} />

		</div>
	);
}

function Drawer(props: { todoList: Todo[], oneDataList: OneData[] }) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
  
	const handleClick = () => {
	  setOpen(!open);
	};

	return (
		<div>
			<div className={classes.drawerHeader} />
			<Divider />
			<List>
				<ListItem button onClick={() => history.push("/")}>
					<ListItemIcon>
						<HomeIcon />
					</ListItemIcon>
					<ListItemText primary="Home" />
				</ListItem>
			</List>
			<Divider />
			<List>
				<ListItem button onClick={() => history.push("/todo")}>
					<ListItemIcon>
						<TodoIcon todoList={props.todoList} />
					</ListItemIcon>
					<ListItemText primary="Todo" />
				</ListItem>
			</List>
			<Divider />
			<List>
				<ListItem button onClick={() => history.push("/one")}>
					<ListItemIcon>
						<OneIcon oneDataList={props.oneDataList} />
					</ListItemIcon>
					<ListItemText primary="One" />
				</ListItem>
			</List>
			<Divider />
			<List>
				<ListItem button onClick={handleClick}>
					<ListItemIcon>
					<InboxIcon />
					</ListItemIcon>
					<ListItemText primary="Inbox" />
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
					<ListItem button className={classes.nestes} onClick={() => history.push("/inbox/starred")}>
						<ListItemIcon>
						<StarBorder />
						</ListItemIcon>
						<ListItemText primary="Starred" />
					</ListItem>
					<ListItem button className={classes.nestes} onClick={() => history.push("/inbox/unstarred")}>
						<ListItemIcon>
						<StarBorder />
						</ListItemIcon>
						<ListItemText primary="UnStarred" />
					</ListItem>
					</List>
				</Collapse>
			</List>
		</div>
	);
}

interface Props extends RouteComponentProps<void>, WithWidth {
	todoList: Todo[];
	oneDataList: OneData[];
}

function App(props?: Props) {
	const classes = useStyles();
	const [mobileOpen, setMobileOpen] = React.useState(true);

	if (!props) {
		return null;
	}

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<Router  history={history}  >
			<div className={classes.root}>
				<div className={classes.appFrame}>
					<AppBar className={classes.appBar}>
						<Toolbar>
							<IconButton
								color="inherit"
								aria-label="open drawer"
								onClick={handleDrawerToggle}
								className={classes.navIconHide}
							>
								<MenuIcon />
							</IconButton>
							<Typography
								variant="h6"
								color="inherit"
								noWrap={isWidthUp("sm", props.width)}
							>
								ReactJS, Material-UI, Typescript, Redux and Routing
							</Typography>
						</Toolbar>
					</AppBar>
					<Hidden mdUp>
						<DrawerMui
							variant="temporary"
							anchor={"left"}
							open={mobileOpen}
							classes={{
								paper: classes.drawerPaper,
							}}
							onClose={handleDrawerToggle}
							ModalProps={{
								keepMounted: true, // Better open performance on mobile.
							}}
						>
							<Drawer todoList={props.todoList} oneDataList={props.oneDataList} />
						</DrawerMui>
					</Hidden>
					<Hidden smDown>
						<DrawerMui
							variant="permanent"
							open
							classes={{
								paper: classes.drawerPaper,
							}}
						>
							<Drawer todoList={props.todoList} oneDataList={props.oneDataList} />
						</DrawerMui>
					</Hidden>
					<Routes />
				</div>
			</div>
		</Router>
	);
}

function TodoIcon(props: { todoList: Todo[] }) {
	let uncompletedTodos = props.todoList.filter(t => t.completed === false);

	if (uncompletedTodos.length > 0) {
		return (
			<Badge color="secondary" badgeContent={uncompletedTodos.length}>
				<FormatListNumberedIcon />
			</Badge>
		);
	} else {
		return <FormatListNumberedIcon />;
	}
}

function OneIcon(props: { oneDataList: OneData[] }) {
	let oneDataList = props.oneDataList;

	if (oneDataList != undefined && oneDataList.length > 0) {
		return (
			<Badge color="secondary" badgeContent={oneDataList.length}>
				<FormatListNumberedIcon />
			</Badge>
		);
	} else {
		return <FormatListNumberedIcon />;
	}
}

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: "100%",
		height: "100%",
		zIndex: 1,
		overflow: "hidden",
		backgroundColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
	},
	nestes: {
		paddingLeft: theme.spacing(4),
	},
	appFrame: {
		position: "relative",
		display: "flex",
		width: "100%",
		height: "100%",
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		position: "absolute",
		backgroundColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		
	},
	navIconHide: {
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
	drawerHeader: theme.mixins.toolbar,
	drawerPaper: {
		width: 250,
		backgroundColor: theme.palette.background.default,
		[theme.breakpoints.up("md")]: {
			width: drawerWidth,
			position: "relative",
			height: "100%",
		},
	},
	content: {
		backgroundColor: theme.palette.background.default,
		width: "100%",
		height: "calc(100% - 56px)",
		marginTop: 56,
		[theme.breakpoints.up("sm")]: {
			height: "calc(100% - 64px)",
			marginTop: 64,
		},
	},
}));

function mapStateToProps(state: RootState) {
	return {
		todoList: state.todoList,
		oneDataList: state.oneDataList,
	};
}

export default connect(mapStateToProps)(withRoot(withWidth()(App)));
