import {theme} from "../../theme/theme";
import {Link} from "@mui/material";
import * as utils from "../../utility/utility";

export const CLink = ({value}) => {
    return (
        <Link
            href={utils.path(value)}
            underline="none"
            sx={{
                "&:hover": {color: theme.palette.secondary.main },
                marginLeft: "8px",
                marginTop: "32px",
                marginBottom: "32px",
                marginRight: "64px",
                fontWeight: 500,
            }}>
            {value}
        </Link>
    )
}