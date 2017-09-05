using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

public class EditProfileDBService
{
    string strCon;
    public EditProfileDBService()
    {
        strCon = DBGlobals.strCon;
    }
    public string EditProfile(string userID,  string userNewMail, string userNewPhone)
    {
        User u = new User();
        SqlConnection con = new SqlConnection(strCon);
        SqlCommand com = new SqlCommand(
        " UPDATE Users SET  Email = '" + userNewMail + "' , Phone = '" + userNewPhone + "' " +
        " OUTPUT inserted.Email, inserted.Phone " + 
        " WHERE UserID = '" + int.Parse(userID) + "' ", con);

        con.Open();
        SqlDataReader reader = com.ExecuteReader();
        if (reader.Read())
        {
            u.Email = reader["Email"].ToString();
            u.Phone = reader["Phone"].ToString();
     
        }
        com.Connection.Close();

        JavaScriptSerializer serializer = new JavaScriptSerializer();
        return serializer.Serialize(u);
    }
}
