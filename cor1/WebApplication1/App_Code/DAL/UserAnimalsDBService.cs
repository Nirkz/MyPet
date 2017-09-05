using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

public class UserAnimalsDBService
{
    string strCon;

    public UserAnimalsDBService()
    {
        strCon = DBGlobals.strCon;
    }

    public List<string> GetUserAnimalsUsingClass(string userID)
    {
        List<string> output = new List<string>();
        JavaScriptSerializer serializer = new JavaScriptSerializer();
        SqlConnection con = new SqlConnection(strCon);
        SqlCommand com = new SqlCommand(
            " SELECT * " +
            " FROM Animals " +
            " WHERE UserID = '" + userID + "' "
            , con);

        con.Open();
        SqlDataReader reader = com.ExecuteReader();
        while (reader.Read())
        {
            Animal a = new Animal
                (
              reader["AnimalID"].ToString(),  reader["Name"].ToString()
                );
            output.Add(serializer.Serialize(a));
        }
        com.Connection.Close(); 

        return output;
    }
}
