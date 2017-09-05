using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

/// <summary>
/// Summary description for LoginDBService
/// </summary>
public class LoginDBService
{
    string strCon;

    public LoginDBService()
    {
        strCon = DBGlobals.strCon;
    }

    public string LoginUserUsingClass(string name, string password)
    {
        User u = null;
        SqlConnection con = new SqlConnection(strCon);
        SqlCommand com = new SqlCommand(
            " SELECT * " +
            " FROM Users " +
            " WHERE UserName = '" + name + "' AND Passward =  '" + password + "' "
            , con);

        con.Open();
         SqlDataReader reader = com.ExecuteReader();
        if (reader.Read())
        {

            //output = reader["Id"].ToString() + ", " + reader["Family"].ToString();
            u = new User(int.Parse(reader["UserID"].ToString()),
                reader["UserName"].ToString(),
                reader["Email"].ToString(),
                reader["Passward"].ToString(),
               reader["Phone"].ToString());
        }
        com.Connection.Close();

        JavaScriptSerializer serializer = new JavaScriptSerializer();
        return serializer.Serialize(u);
    }
}