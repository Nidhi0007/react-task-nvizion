import { useFormik } from "formik";
import { roleSchema } from "./schemas";
import { addRole, editRole } from "../../Redux/slices/roleSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const RoleForm = ({ isEdit, data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    if (!isEdit) {
      dispatch(
        addRole({ roleLabel: values.roleLabel, roleKey: values.roleKey })
      );
    } else {
      dispatch(
        editRole({
          roleLabel: values.roleLabel,
          roleKey: values.roleKey,
          id: values.id,
        })
      );
    }
    navigate("/");
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      id: isEdit ? data.id : "",
      roleLabel: isEdit ? data.roleLabel : "",
      roleKey: isEdit ? data.roleKey : "",
    },
    validationSchema: roleSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
    <div style={{ display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Typography variant="h5" gutterBottom>
          {!isEdit ? "Add Role" : "Edit Role"}
        </Typography>

        <FormControl style={{ margin: 'auto', width: '14.5%' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                error={errors.roleLabel ? errors.roleLabel : false}
                value={values.roleLabel}
                onChange={handleChange}
                id="roleLabel"
                type="text"
                placeholder="Enter Role Label"
                onBlur={handleBlur}
                helperText={(errors.roleLabel && touched.roleLabel) && errors.roleLabel}
                className={
                  errors.roleLabel && touched.roleLabel ? "input-error" : ""
                }
              />

        
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={errors.roleKey ? errors.roleKey : false}
                id="roleKey"
                type="text"
                placeholder="Enter Role Key"
                value={values.roleKey}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={(errors.roleKey && touched.roleKey) && errors.roleKey}
                className={
                  errors.roleKey && touched.roleKey ? "input-error" : ""
                }
              />

            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" disabled={isSubmitting} type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </div>
    </form>
  );
};
export default RoleForm;
