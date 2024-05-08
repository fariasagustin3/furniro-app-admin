import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { useState } from 'react';

export default function AdditionalInfoDialog({ open, close, onAdd }) {
  const [additionalInfo, setAdditionalInfo] = useState({})
  const [input, setInput] = useState({
    key: "",
    value: ""
  })

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }

  const handleClose = () => {
    close(false)
  }

  const add = () => {
    onAdd({
      key: input.key,
      value: input.value
    })
    close(false)
    setInput({
      key: "",
      value: ""
    })
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
          <h2 className='text-xl'>Add new property</h2>
          <div className='flex items-center gap-3 mt-4'>
            <input
              type="text"
              className='border-gray-400 border-[1px] focus:outline-none px-3 py-2 text-sm'
              name="key"
              onChange={handleChange}
              value={input.key}
            />
            <input
              type="text"
              className='border-gray-400 border-[1px] focus:outline-none px-3 py-2 text-sm'
              name="value"
              onChange={handleChange}
              value={input.value}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" autoFocus>
            Cancel
          </Button>
          <Button onClick={add} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}