import './App.css';
import IntakeForm from '../intakeForm/IntakeForm';
import { Backdrop, CircularProgress, createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core';
import themeOptions from '../../config/theme.json';
import useConditions from '../../hooks/useConditions';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: theme.palette.background.paper
    },
}));

function App() {
    const theme = createMuiTheme(themeOptions);
    const classes = useStyles();

    const [availableConditions, conditionsPending] = useConditions();

    return (
        <ThemeProvider theme={theme}>
            <Backdrop className={classes.backdrop} open={conditionsPending}>
                <CircularProgress size="5em" style={{ color: theme.palette.secondary.light }} />
            </Backdrop>
            {!conditionsPending &&
                <IntakeForm
                    availableConditions={availableConditions}
                />}
        </ThemeProvider>
    )
}

export default App;
