package _05_class;

// (만들어져있는 필터에 대한) Getter 및 Setter, constructor 자동생성 단축키.
// alt + insert
// command + N
public class Test {
    private int val1;
    private String val2;
    private double val3;

    public Test(int val1, String val2, double val3) {
        this.val1 = val1;
        this.val2 = val2;
        this.val3 = val3;
    }

    public int getVal1() {
        return val1;
    }

    public String getVal2() {
        return val2;
    }

    public double getVal3() {
        return val3;
    }

    public void setVal1(int val1) {
        this.val1 = val1;
    }

    public void setVal2(String val2) {
        this.val2 = val2;
    }

    public void setVal3(double val3) {
        this.val3 = val3;
    }
}
