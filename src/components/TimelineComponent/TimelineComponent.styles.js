import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
        width: '55%',
        backgroundColor: '#00000095',
        lineHeight: 1,
        '@media (max-width:992px)': {
            width: '100%'
        }
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));
