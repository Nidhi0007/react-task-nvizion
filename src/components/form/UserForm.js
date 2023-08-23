import { useFormik } from "formik";
import { MenuItem, Select } from "@mui/material";
import { userSchema } from "./schemas";
import { addUser, editUser } from "../../Redux/slices/userSlice";
import {
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserForm = ({ isEdit, data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { roleData } = useSelector((state) => state.role);
  const onSubmit = async (values, actions) => {
    if (!isEdit) {
      dispatch(addUser(values));
    } else {
      dispatch(editUser(values));
    }
    navigate("/users");
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
      name: isEdit ? data.name : "",
      email: isEdit ? data.email : "",
      username: isEdit ? data.username : "",
      mobile: isEdit ? data.mobile : "",
      roleKey: isEdit ? data.roleKey : roleData[0].roleKey,
      password: isEdit ? data.password : "",
    },
    validationSchema: userSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" gutterBottom>
          {!isEdit ? "Add User" : "Edit User"}
        </Typography>
        <FormControl style={{ margin: "auto", width: "15%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                error={errors.name ? errors.name : false}
                value={values.name}
                onChange={handleChange}
                id="name"
                type="text"
                helperText={errors.name && touched.name && errors.name}
                placeholder="Enter name"
                onBlur={handleBlur}
                className={errors.name && touched.name ? "input-error" : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={errors.email ? errors.email : false}
                id="email"
                type="text"
                placeholder="Enter email"
                value={values.email}
                onChange={handleChange}
                helperText={errors.email && touched.email && errors.email}
                onBlur={handleBlur}
                className={errors.email && touched.email ? "input-error" : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={errors.username ? errors.username : false}
                id="username"
                type="text"
                placeholder="Enter username"
                helperText={errors.username && touched.username && errors.username}
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.username && touched.username ? "input-error" : ""
                }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                error={errors.mobile ? errors.mobile : false}
                id="mobile"
                type="number"
                placeholder="Enter mobile"
                value={values.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.mobile && touched.mobile ? "input-error" : ""}
                helperText={errors.mobile && touched.mobile && errors.mobile}
              />
            </Grid>
            <Grid item xs={12}>
              <Select
                labelId="demo-simple-select-label"
                id="roleKey"
                name="roleKey"
                value={values.roleKey}
                label="Roles"
                onChange={handleChange}
                className={
                  errors.roleKey && touched.roleKey ? "input-error" : ""
                }
              >
                {roleData.map((item) => {
                  return (
                    <MenuItem key={item.roleKey} value={item.roleKey}>
                      {item.roleLabel}
                    </MenuItem>
                  );
                })}
              </Select>
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={errors.password ? errors.password : false}
                id="password"
                type="text"
                placeholder="Enter password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.password && touched.password && errors.password
                }
                className={
                  errors.password && touched.password ? "input-error" : ""
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
export default UserForm;
