import {
    Box,
    Button,
    createStyles,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
    makeStyles,
    Typography,
    useTheme,
    Theme,
} from "@material-ui/core";
import { Clear, Error, Help, Info, Warning } from "@material-ui/icons";
import React, { useMemo } from "react";
import ConfirmData, { ConfirmTypes } from "./../interfaces/ConfirmData";

const useConfirmStyles = makeStyles((t) =>
    createStyles({
        dialogRoot: {
            minWidth: 300,
            width: "80%",
            // maxWidth: 600,
            [t.breakpoints.down("xs")]: {
                width: 300,
            },
        },
        titleRoot: {
            height: 56,
        },
        iconBox: {
            height: 56,
        },
        titleBox: {
            height: 56,
        },
        title: {
            [t.breakpoints.down("sm")]: {
                fontSize: "1.1rem",
            },
        },
        messagePre: {
            whiteSpace: "pre-wrap",
        },
    })
);

export const Confirm: React.FC<{ confirmData?: ConfirmData }> = ({
    confirmData,
}) => {
    const classes = useConfirmStyles();
    const { message, title, onClose, onConfirm, onDeny, type } =
        confirmData || {};

    const titleWidth = useMemo(
        () =>
            !onConfirm && !onDeny && type
                ? 8
                : type || onConfirm || onDeny
                ? 9
                : 12,
        [onConfirm, onDeny, type]
    );

    const titleWidthSm = useMemo(
        () =>
            !onConfirm && !onDeny && type
                ? 8
                : type || onConfirm || onDeny
                ? 10
                : 12,
        [onConfirm, onDeny, type]
    );

    const theme = useTheme();
    const darkMode = !!theme;
    const typeIcon = useMemo(() => {
        switch (type) {
            case ConfirmTypes.ERROR:
                return <Error htmlColor={theme.palette.error.main} />;
            case ConfirmTypes.INFO:
                return (
                    <Info
                        htmlColor={
                            darkMode
                                ? theme.palette.getContrastText(
                                      theme.palette.background.default
                                  )
                                : theme.palette.primary.main
                        }
                    />
                );
            case ConfirmTypes.WARN:
                return <Warning htmlColor={theme.palette.warning.main} />;
            case ConfirmTypes.QUESTION:
                return (
                    <Help
                        htmlColor={
                            darkMode
                                ? theme.palette.getContrastText(
                                      theme.palette.background.default
                                  )
                                : theme.palette.primary.main
                        }
                    />
                );
            default:
                return <></>;
        }
    }, [darkMode, theme.palette, type]);

    return (
        <Dialog
            open={!!confirmData && !confirmData?.closed}
            maxWidth={confirmData?.maxWidth ?? "sm"}
            classes={{
                paper: classes.dialogRoot,
            }}
            data-testid="confirmDialog"
        >
            <DialogTitle>
                <Grid
                    container
                    spacing={2}
                    classes={{ root: classes.titleRoot }}
                >
                    {type ? (
                        <Grid item xs={2} sm={2}>
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="flex-start"
                                className={classes.iconBox}
                            >
                                {typeIcon}
                            </Box>
                        </Grid>
                    ) : (
                        ""
                    )}
                    <Grid item xs={titleWidth} sm={titleWidthSm}>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="flex-start"
                            className={classes.titleBox}
                        >
                            {typeof title === "string" ? (
                                <Typography
                                    variant="h3"
                                    component="h2"
                                    className={classes.title}
                                >
                                    {title}
                                </Typography>
                            ) : title ? (
                                title
                            ) : (
                                "Confirm"
                            )}
                        </Box>
                    </Grid>
                    {!onConfirm && !onDeny ? (
                        <Grid item xs={2} sm={2}>
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="flex-end"
                                className={classes.iconBox}
                            >
                                <IconButton onClick={onClose}>
                                    <Clear />
                                </IconButton>
                            </Box>
                        </Grid>
                    ) : (
                        ""
                    )}
                </Grid>
            </DialogTitle>
            <DialogContent>
                {typeof message === "string" ? (
                    <Typography
                        variant="body1"
                        component="pre"
                        className={classes.messagePre}
                    >
                        {message}
                    </Typography>
                ) : (
                    message
                )}
            </DialogContent>
            <DialogActions>
                {onConfirm || onDeny ? (
                    <Button
                        onClick={onDeny || onClose}
                        color="secondary"
                        variant={darkMode ? "contained" : "text"}
                    >
                        Nein
                    </Button>
                ) : (
                    ""
                )}
                {onConfirm || onDeny ? (
                    <Button
                        onClick={onConfirm || onClose}
                        color="primary"
                        variant={darkMode ? "contained" : "text"}
                    >
                        Ja
                    </Button>
                ) : (
                    ""
                )}
                {!onConfirm && !onDeny ? (
                    <Button onClick={onClose}>Ok</Button>
                ) : (
                    ""
                )}
            </DialogActions>
        </Dialog>
    );
};
