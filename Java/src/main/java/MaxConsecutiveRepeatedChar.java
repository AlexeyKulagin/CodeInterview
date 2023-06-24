//    Assessment:
//    Given a string, the task is to find the maximum consecutive repeated character in a string.
//
//    Note:
//    We do not need to consider the overall count, but the count of repeating that appears in one place.
//
//    Examples:

//    Input : str = "MMMMaaxReeeppppitingAtTheEnd!!!!!!"
//    Output : !
//
//    Input : str = "MMMMaaxReeepeatingAAAAAAtTheeeeeMiddle!!!!"
//    Output : A
//
//    Input : str = "MMMMMMaxReeepeatingAtTheBeginninggg!!!!"
//    Output : M

class MaxConsecutiveRepeatedChar {

    private static void getMaxConsecutiveRepeatedChar(String str) {
        char pChar = str.charAt(0);
        char maxChar = ' ';
        int maxCount = 0;
        int count = 1;

        for (int i = 1; i < str.length(); i++) {

            if (pChar == str.charAt(i)) count++;
            else {
                if (count > maxCount) {
                    maxCount = count;
                    maxChar = pChar;
                }

                pChar = str.charAt(i);
                count = 1;
            }
        }

        if (count > maxCount) {
            maxCount = count;
            maxChar = pChar;
        }

        System.out.println(maxChar + ": Repeats consecutively " + maxCount + " time(s)");
    }

    public static void main(String[] args) {
        String str1 = "MMMMaaxReeeppppitingAtTheEnd!!!!!!";
        String str2 = "MMMMaaxReeepeatingAAAAAAtTheeeeeMiddle!!!!";
        String str3 = "MMMMMMaxReeepeatingAtTheBeginninggg!!!!";

        getMaxConsecutiveRepeatedChar(str1);
        getMaxConsecutiveRepeatedChar(str2);
        getMaxConsecutiveRepeatedChar(str3);
    }
}
