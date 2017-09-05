using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

/// <summary>
/// Summary description for SignInDBServices
/// </summary>
public class SignInDBServices
{
    string strCon;

    public SignInDBServices()
    {
        strCon = DBGlobals.strCon;
    }
    public string SignInUsingClass(string name, string password, string mail, string phone)
    {
        SqlConnection con = new SqlConnection(strCon);
        SqlCommand com = new SqlCommand(
            "  INSERT INTO[dbo].[Users] ([UserName] ,[Passward] ,[Email] ,[Phone]) " +
            "  VALUES('" + name + "', '" + password + "', '" + mail + "', '" + phone + "') ", con);

        con.Open();
        int numOfRows = com.ExecuteNonQuery();
        string output = numOfRows + " Rows added to the data base";
        com.Connection.Close();

        return output;
    }
}