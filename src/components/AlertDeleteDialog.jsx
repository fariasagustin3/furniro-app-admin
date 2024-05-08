import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

export default function AlertDeleteDialog({ onClose, open, onDelete }) {
  const handleClose = () => {
    onClose(false)
    onDelete(false)
  };

  const confirmDelete = () => {
    onClose(false)
    onDelete(true)
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" autoFocus>
            No
          </Button>
          <Button onClick={confirmDelete} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}