import {Alert} from "react-bootstrap";

export default function AlertNotifications({error, success}) {
    return(
        <>
            {error && error.length > 0 && <Alert variant="danger">
                {error.map((err, i) =>
                    <span key={i} className="font-medium">{err}<br/></span>
                )}
            </Alert>}

            {success && <Alert variant="success">
                <span className="font-medium">{success}</span>
            </Alert>}
        </>
    );
}