import React, { useState } from "react";
import TextField from '@material-ui/core/TextField'
import useForm from "../../hooks/useForm";


export const SignUpPage = () => {
    const {form, onChange } = useForm({email: ""})
  return (
    <div>
      <div>
          <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          label={"E-mail"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"email"}
          />
      </div>
    </div>
  );
}
