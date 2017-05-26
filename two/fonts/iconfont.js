;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-weibo" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M407.859 574.347c-15.395 1.61-26.392 14.995-26.392 27.765 0 12.799 12.41 21.669 27.719 19.871 15.221-1.762 27.718-13.596 27.718-26.312C436.905 582.782 425.425 572.633 407.859 574.347zM446.197 478.184c-81.6 3.708-147.581 47.4-147.581 101.98 0 54.469 65.981 95.343 147.581 91.562 81.6-3.712 147.736-54.854 147.736-109.274C593.933 508.018 527.796 474.398 446.197 478.184zM501.715 615.269c-24.915 32.244-74.336 48.024-122.438 22.02-22.807-12.378-22.025-36.741-22.025-36.741s-9.447-76.924 72.618-86.526C512.104 504.454 526.785 582.979 501.715 615.269zM446.742 563.765c-5.315 3.871-6.321 11.09-3.516 15.667 2.735 4.604 9.062 5.187 14.296 1.318 5.073-4.021 7.102-11.019 4.368-15.659C459.16 560.563 452.833 559.276 446.742 563.765zM499.997 51.393c-246.834 0-446.896 200.066-446.896 446.896 0 246.875 200.062 446.905 446.896 446.905 246.841 0 446.902-200.03 446.902-446.905C946.899 251.459 746.838 51.393 499.997 51.393zM666.875 598.561c-33.661 71.478-144.543 106.237-226.844 99.796-78.096-6.125-178.508-32.026-188.978-126.664 0 0-5.464-42.746 35.999-98.185 0 0 59.737-83.487 129.389-107.219 69.662-23.703 77.7 16.399 77.7 40.094-3.666 20.107-10.7 31.855 15.457 23.779 0 0 68.494-31.741 96.597-3.599 22.807 22.766 3.753 54.037 3.753 54.037s-9.453 10.398 9.992 14.168C639.311 498.601 700.53 526.947 666.875 598.561zM599.405 401.071c-7.419 0-13.429-6.001-13.429-13.395 0-7.494 6.01-13.547 13.429-13.547 0 0 83.869-15.493 73.871 74.615 0 0.584-0.081 0.98-0.155 1.402-1.091 6.4-6.556 11.323-13.118 11.323-7.579 0-13.589-6.012-13.589-13.396C646.414 448.075 659.692 387.749 599.405 401.071zM741.212 463.892h-0.075c-2.264 32.577-9.837 21.163-18.898 21.163-10.773 0-19.365-5.382-19.365-16.248 0-9.331 3.821-17.207 3.821-17.207 1.092-3.908 10.309-27.576-6.004-64.157-29.839-50.082-89.96-50.405-97.069-47.513-7.027 2.763-17.727 4.416-17.727 4.416-10.774 0-19.519-8.669-19.519-19.366 0-9.066 5.93-16.482 14.21-18.828 0 0 0.23-0.024 0.545-0.115 0.546-0.109 1.173-0.233 1.873-0.307 8.281-1.563 38.109-13.002 67.162-6.216C702.086 311.584 773.236 366.548 741.212 463.892z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangshang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M838.116 732.779 877.7 693.195 511.979 327.549 146.3 693.195 185.883 732.779 512.003 406.652Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bofang" viewBox="0 0 1064 1024">' +
    '' +
    '<path d="M-48.606208 883.816448"  ></path>' +
    '' +
    '<path d="M1041.337344 883.816448"  ></path>' +
    '' +
    '<path d="M85.164032 853.49376"  ></path>' +
    '' +
    '<path d="M439.277568 253.131776 736.444416 512.809984 439.277568 772.02432Z"  ></path>' +
    '' +
    '<path d="M85.164032 512.346112c0 124.5184 42.580992 228.202496 130.994176 316.613632 87.49056 87.486464 193.494016 131.693568 317.07648 131.462144 123.60192-0.232448 228.6592-43.97568 316.146688-131.462144 87.494656-87.486464 131.692544-193.021952 131.472384-316.613632-0.242688-124.055552-43.976704-229.588992-131.472384-317.07648C761.892864 107.782144 656.836608 64.270336 533.234688 64.270336c-124.045312 0-229.817344 43.281408-317.07648 130.999296C128.436224 283.450368 85.164032 387.828736 85.164032 512.346112z"  ></path>' +
    '' +
    '<path d="M980.380672 853.49376"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weixin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M523.889 166.498c-194.255 0-352.277 142.217-352.277 317.057 0 63.414 20.812 124.438 60.291 177.012l-41.92 170.942c-1.598 6.532 0.668 13.452 5.847 17.748 3.212 2.689 7.222 4.059 11.263 4.059 2.455 0 4.926-0.512 7.222-1.541l170.944-76.961c44.258 17.132 90.862 25.799 138.623 25.799 194.255 0 352.283-142.253 352.283-317.060 0-174.838-158.030-317.060-352.283-317.060zM523.889 765.381c-45.738 0-90.272-8.774-132.377-26.039-4.435-1.787-9.491-1.719-13.898 0.274l-144.798 65.19 35.332-144.075c1.291-5.331 0.066-10.909-3.321-15.134-37.924-47.825-57.98-103.856-57.98-162.048 0-155.398 142.234-281.823 317.051-281.823s317.051 126.428 317.051 281.823c0 155.407-142.234 281.834-317.051 281.834zM400.589 395.411c-19.461 0-35.229 15.767-35.229 35.229s15.767 35.229 35.229 35.229c19.451 0 35.226-15.767 35.226-35.229s-15.77-35.229-35.226-35.229zM647.184 395.411c-19.46 0-35.229 15.767-35.229 35.229s15.767 35.229 35.229 35.229 35.229-15.767 35.229-35.229-15.77-35.229-35.229-35.229z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weixin1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M595.161536 513.613754c-14.525831 0-29.131481 14.606673-29.131481 29.104875 0 14.718213 14.604626 29.15911 29.131481 29.15911 22.022573 0 36.434817-14.440897 36.434817-29.15911C631.5984 528.21838 617.185132 513.613754 595.161536 513.613754z"  ></path>' +
    '' +
    '<path d="M755.352959 513.613754c-14.418384 0-28.940123 14.606673-28.940123 29.104875 0 14.718213 14.523785 29.15911 28.940123 29.15911 21.830191 0 36.437887-14.440897 36.437887-29.15911C791.792892 528.21838 777.18315 513.613754 755.352959 513.613754z"  ></path>' +
    '' +
    '<path d="M296.611953 302.378795c-21.802562 0-43.849694 14.389732-43.849694 36.32737 0 21.830191 22.047132 36.436864 43.849694 36.436864 21.829168 0 36.326347-14.606673 36.326347-36.436864C332.939323 316.768527 318.441121 302.378795 296.611953 302.378795z"  ></path>' +
    '' +
    '<path d="M500.460688 375.142006c21.911032 0 36.434817-14.606673 36.434817-36.436864 0-21.937638-14.524808-36.32737-36.434817-36.32737-21.828145 0-43.767829 14.389732-43.767829 36.32737C456.693882 360.535333 478.633566 375.142006 500.460688 375.142006z"  ></path>' +
    '' +
    '<path d="M511.456113 3.184529C229.702054 3.184529 1.044284 231.749178 1.044284 513.612731c0 281.862529 228.65777 510.387269 510.411829 510.387269 281.784758 0 510.334058-228.523717 510.334058-510.387269C1021.79017 231.749178 793.240871 3.184529 511.456113 3.184529zM391.232984 673.965835c-36.353976 0-65.572438-7.385201-102.006232-14.606673l-101.814874 51.101865 29.102828-87.645153C143.644049 571.878762 99.985714 506.173295 99.985714 426.188612c0-138.581242 131.138736-247.670799 291.24727-247.670799 143.174863 0 268.624017 87.151919 293.843398 204.503651-9.242502-1.039679-18.599613-1.696642-28.03552-1.696642-138.364301 0-247.589958 103.238292-247.589958 230.494605 0 21.11797 3.28379 41.523719 8.974395 61.000306C409.424298 673.528883 400.369062 673.965835 391.232984 673.965835zM820.813856 776.00072l21.937638 72.820516-79.876212-43.768853c-29.132504 7.27366-58.402131 14.605649-87.399559 14.605649-138.580219 0-247.700475-94.703919-247.700475-211.343429 0-116.477828 109.120256-211.344452 247.700475-211.344452 130.808208 0 247.368924 94.866624 247.368924 211.344452C922.848741 673.965835 879.298875 732.177632 820.813856 776.00072z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M773.688889 932.977778 250.311111 932.977778c-37.705956 0-68.266667-30.583467-68.266667-68.266667L182.044444 159.288889c0-37.6832 30.560711-68.266667 68.266667-68.266667l523.377778 0c37.705956 0 68.266667 30.583467 68.266667 68.266667l0 705.422222C841.955556 902.394311 811.394844 932.977778 773.688889 932.977778zM796.444444 182.044444c0-25.122133-20.388978-45.511111-45.511111-45.511111L273.066667 136.533333c-25.122133 0-45.511111 20.388978-45.511111 45.511111l0 659.911111c0 25.122133 20.388978 45.511111 45.511111 45.511111l477.866667 0c25.122133 0 45.511111-20.388978 45.511111-45.511111L796.444444 182.044444zM591.644444 819.2l-159.288889 0c-12.583822 0-22.755556-10.171733-22.755556-22.755556s10.171733-22.755556 22.755556-22.755556l159.288889 0c12.583822 0 22.755556 10.171733 22.755556 22.755556S604.228267 819.2 591.644444 819.2z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-4" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.153981 59.782095c-249.090438 0-451.023238 201.903543-451.023238 451.040305 0 249.102629 201.935238 451.040305 451.023238 451.040305 249.102629 0 451.069562-201.937676 451.069562-451.040305C962.223543 261.6832 760.25661 59.782095 511.153981 59.782095zM375.113143 804.842057l-0.5632 0c-11.14941 0-20.319086-9.07459-20.609219-20.494629-3.74979-138.003505 52.865219-218.923886 94.273829-259.369448-16.34499-28.186819-15.123505-64.738743 5.856305-92.055162 27.253029-35.362133 77.47779-41.442743 112.147505-13.609448 34.669714 27.799162 40.606476 79.086933 13.385143 114.480762-24.663771 32.046324-68.195962 39.992076-101.885562 20.560457-35.13539 33.879771-85.942857 104.6016-82.531962 228.803048C395.512686 794.804419 386.503924 804.520229 375.113143 804.842057zM516.881067 682.63741c-13.997105 0-28.089295-1.543314-41.635352-4.566552-11.132343-2.413714-18.180876-13.643581-15.78179-25.034362 2.428343-11.390781 13.4656-18.566095 24.549181-16.08899 10.730057 2.350324 21.767314 3.540114 32.867962 3.540114 84.848152 0 153.848686-70.434133 153.848686-157.147429 0-86.615771-68.968838-157.147429-153.848686-157.147429-84.879848 0-153.929143 70.531657-153.929143 157.147429 0 17.149562 2.735543 33.977295 7.977448 50.097981 3.620571 11.005562-2.186971 23.005867-12.999924 26.672762-10.778819 3.701029-22.491429-2.218667-26.094933-13.224229-6.692571-20.433676-10.135162-41.798705-10.135162-63.546514 0-109.816686 87.517867-199.233829 195.179276-199.233829 107.529752 0 195.113448 89.417143 195.113448 199.233829C711.994514 593.2544 624.410819 682.63741 516.881067 682.63741z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-qqkongjian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.994372 65.234812c-246.736767 0-446.75649 200.035072-446.75649 446.7657s200.051445 446.764676 446.75649 446.764676c246.773606 0 446.76877-200.028932 446.76877-446.764676C958.762118 265.269884 758.761838 65.234812 511.994372 65.234812M799.32676 451.958984l-127.789582 116.869871c-6.633077 6.210452-8.007379 9.190322-6.633077 17.818849l2.773163 14.88912c-61.78115-0.780783-130.525906-3.531433-186.279777-11.23796-4.546554-0.66208-0.331552-3.083225-0.331552-3.083225l181.246128-122.874638c0 0 7.16929-4.356219-0.506537-5.486973-9.911754-1.579986-30.671587-4.356219-30.627585-4.394081-36.674307-4.386918-76.93326-6.80397-119.195848-6.80397-71.624342 0-137.551933 6.963606-189.914564 18.654891 1.786694 0 3.560086-0.042979 5.339617-0.042979 77.488916 0 159.917336 2.881633 234.326097 14.252623 4.6847 0.621147-0.062422 3.506874-0.062422 3.506874l-181.007698 125.791063c0 0-7.601126 4.418641-0.599658 5.505393 18.730615 2.520406 38.490678 4.515855 59.064269 5.911646l0.106424-0.065492c23.395873 1.623989 47.803797 2.489706 72.941339 2.489706 68.094956 0 141.561251-7.413861 194.973795-19.923792l3.647067-0.696872c-8.949845 7.086403-23.933109 13.353136-39.391188 18.471719l25.819064 138.562961c2.811025 14.893213-5.876853 20.878537-19.286271 13.293784l-150.955211-85.242515c-10.342566-6.260594-20.067055-6.071282-30.628608 0.4083l-150.21229 84.833192c-13.409418 7.578613-22.046131 1.620919-19.198267-13.286621l33.738439-173.664445c1.767252-7.800671 1.654688-10.222839-4.546554-15.890938l-131.600379-118.341387c-11.211354-10.4582-7.762809-20.24204 7.644105-21.756535l167.724147-18.415437c13.041027-1.208526 15.53278-3.228534 20.91026-12.13847l78.918476-160.710399c6.77634-13.621242 17.843408-13.621242 24.613609 0l74.047534 160.710399c4.140301 10.532901 7.114032 12.557003 20.35972 13.765529l173.151768 16.788378C807.314696 431.935931 810.661934 441.631767 799.32676 451.958984"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangyou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M556.1 225.6 794 463.5 112.2 463.5c-26.6 0-48.2 21.6-48.2 48.2 0 26.6 21.6 48.2 48.2 48.2L794 559.9 556.1 797.8c-18.8 18.8-18.8 49.4 0 68.2 18.8 18.8 49.4 18.8 68.2 0l306.1-306.1 4.1-4.1 15-16.7c5.6-7.8 9.1-17.1 9.1-27.4 0-10.3-3.5-19.6-9.1-27.4l-15-16.7-4.1-4.1L624.3 157.3c-18.8-18.8-49.4-18.8-68.2 0C537.3 176.2 537.3 206.7 556.1 225.6z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yijian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.172939 67.343781c246.489904 0 446.030519 199.539592 446.030519 446.030519S758.662843 959.40482 512.172939 959.40482 66.142419 759.864204 66.142419 513.3743 265.682012 67.343781 512.172939 67.343781M512.172939 114.294093c-220.198098 0-399.079184 178.881087-399.079184 399.079184s178.881087 399.079184 399.079184 399.079184 399.079184-178.881087 399.079184-399.079184S732.371036 114.294093 512.172939 114.294093"  ></path>' +
    '' +
    '<path d="M512.172939 357.282243m-35.302017 0a34.498 34.498 0 1 0 70.604034 0 34.498 34.498 0 1 0-70.604034 0Z"  ></path>' +
    '' +
    '<path d="M535.647583 702.366675c0 12.815887-10.389628 23.205515-23.205515 23.205515l-0.539282 0c-12.815887 0-23.205515-10.389628-23.205515-23.205515L488.697271 514.025123c0-12.815887 10.389628-23.205515 23.205515-23.205515l0.539282 0c12.815887 0 23.205515 10.389628 23.205515 23.205515L535.647583 702.366675z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-lujing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M309.614593 554.687218c-62.760392 0-113.63713 51.125401-113.63713 113.714901l0 227.78489 56.916291 0 0-227.677443c0-31.428803 25.52842-56.906058 57.08309-56.906058l227.695862 0c62.760392 0 113.63713-51.216475 113.63713-113.833605L651.309836 355.479177l142.29175 0-170.749896-227.666186L452.101795 355.479177l142.29175 0 0 142.124951c0 31.526017-25.52842 57.08309-57.08309 57.08309L309.614593 554.687218z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-lujing1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M675.40992 590.9504 739.67616 526.68416 353.792 140.8 289.52576 205.08672 675.40992 590.9504Z"  ></path>' +
    '' +
    '<path d="M739.67616 526.68416 675.40992 462.39744 289.52576 848.30208 353.792 912.56832 739.67616 526.68416Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wenti" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C229.23 0 0 229.225 0 511.998 0 794.768 229.23 1024 512 1024s512-229.232 512-512.002C1024 229.225 794.77 0 512 0z m0 959.999c-247.422 0-448-200.576-448-448.001 0-247.426 200.577-448 448-448 247.424 0 448 200.574 448 448 0 247.425-200.576 448.001-448 448.001z m24.347-315.069c-7.333-6.668-16.366-10.011-27.104-10.011-10.912 0-20.118 3.343-27.617 10.011-7.503 6.669-11.251 14.885-11.251 24.656 0 11.015 3.874 19.577 11.633 25.702 7.756 6.129 16.834 9.194 27.235 9.194 10.055 0 18.921-3.111 26.593-9.309 7.672-6.206 11.507-14.729 11.507-25.588-0.001-9.771-3.668-17.986-10.996-24.655z m44.491-312.204c-18.921-8.294-40.745-12.446-65.46-12.446-26.593 0-49.863 4.967-69.809 14.885-19.944 9.929-35.119 22.453-45.515 37.568-10.401 15.125-15.599 30.055-15.599 44.787 0 7.135 3.279 13.762 9.845 19.89 6.561 6.123 14.616 9.185 24.165 9.185 16.193 0 27.189-8.758 32.987-26.283 6.136-16.755 13.635-29.426 22.502-38.033 8.861-8.609 22.67-12.911 41.424-12.911 16.022 0 29.107 4.27 39.251 12.794 10.141 8.527 15.215 19 15.215 31.406 0 6.356-1.662 12.246-4.986 17.676-3.324 5.432-7.415 10.352-12.273 14.77-4.857 4.426-12.745 10.975-23.653 19.66-12.445 9.924-22.335 18.49-29.663 25.701-7.332 7.219-13.212 15.593-17.643 25.129-4.435 9.537-6.649 20.822-6.649 33.846 0 10.394 3.024 18.225 9.078 23.497 6.049 5.273 13.508 7.909 22.374 7.909 17.046 0 27.19-8.059 30.429-24.191 1.876-7.598 3.281-12.911 4.221-15.938 0.934-3.019 2.257-6.045 3.963-9.075 1.703-3.02 4.303-6.354 7.8-9.998 3.492-3.645 8.138-7.872 13.936-12.68 20.968-17.06 35.499-29.193 43.598-36.411 8.096-7.21 15.087-15.773 20.969-25.701 5.882-9.924 8.822-21.479 8.822-34.668 0-16.738-5.158-32.254-15.472-46.521-10.317-14.267-24.933-25.552-43.857-33.847z" fill="#666666" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)