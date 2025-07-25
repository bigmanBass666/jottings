# Algorithms

1. 已知三边长, 判断是否为三角形

    ```java
    // 任意两边之和大于第三边。换句话说，假设三条边长分别为 a、b 和 c，则必须满足以下条件之一：
    // a + b > c
    // a + c > b
    // b + c > a
    public static boolean isTriangle(int a, int b, int c) {
      return (a + b > c) && (a + c > b) && (b + c > a);
    }
    ```

    > 2023 November 15 Wednesday 15:08

2. 交换两个变量

    ```java
    temp = a;
    a = b;
    b = temp;
    ```

    ```java
    a = a + b;
    b = a - b;
    a = a - b;
    ```

    ```java
    a = a + b - (b = a);
    ```

    > 2024  January 9  Tuesday  23:33

3. 最小公倍数 (欧几里得算法/辗转相除法)

    - 设两个正整数为a和b，并且a > b。那么a和b的最大公约数（Greatest Common Divisor，简称GCD）等于b和a % b的最大公约数。

    - 换句话说，如果我们将a除以b得到的余数记为r，那么a和b的最大公约数等同于b和r的最大公约数。这个过程可以一直重复下去，直到余数为零时停止。此时，非零的那个数就是最大公约数。

    - 欧几里得算法的步骤如下：
      1. 令a和b分别为两个正整数，且a > b。
      2. 求a除以b的余数，记作r。
      3. 如果r为零，则b即为最大公约数，算法终止。
      4. 如果r不为零，则将原先的b赋值给a，将r赋值给b，回到步骤2。

    ```java
    // 辗转相除找最大公约数，然后x * y / 最大公约数就是最小公倍数
    public static int getCM(int m, int n) {
        return m * n / gcd(m, n);
    }

    public static int gcd(int m, int n) {
        if (n == 0) return m;
        return gcd(n, m % n);
    }
    ```

    ```java
    public static int getCM(int m, int n) {
        int max = m > n ? m : n;
        int min = m + n - max;

        // 欧几里得算法（辗转相除法）
        while (min != 0) {
            int temp = min;
            min = max % min;
            max = temp;
        }

        return (m * n) / max;
    }
    ```
