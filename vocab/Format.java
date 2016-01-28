import java.io.*;

class Format{
	public static void main(String[] args){
		try {
			FileWriter fw = new FileWriter("data.js", false);
			PrintWriter pw = new PrintWriter(fw);
			FileReader fr = new FileReader("data.txt");
			BufferedReader br = new BufferedReader(fr);
			pw.println("var book = '[\\");

			String[] vocabulary = new String[100];
			int vocabularyNum = 0;
			String result;
			while (br.ready()){
				vocabulary = br.readLine().split(" ");
				for (int i = 0; i < vocabulary.length; i++)
					System.out.println(vocabulary[i]);
				result = "";
				result += (vocabularyNum == 0) ? "{" : ",{";
				result += "\"en\":\"";	//"en":
				result += vocabulary[0];//apple
				result += "\", \"ch\":[";//", "ch":[

				for (int i = 1; i < vocabulary.length - 1; i++)
					result += "\"" + vocabulary[i] + "\", ";	//"chinese", 
				result += "\"" + vocabulary[vocabulary.length - 1] + "\"]}\\";
				System.out.println(result);
				pw.println(result);
				vocabularyNum++;
			}
			System.out.println("]\';");
			pw.println("]\';");
			pw.flush();
			fw.close();
		}
		catch (Exception e){
			System.out.println("err");
			System.exit(0);
		}
	}
}
