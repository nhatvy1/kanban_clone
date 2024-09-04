# RTK query là gì ? 

RTK query là thư viện thuộc hệ sinh thái Redux giúp chúng ta quản lý việc
gọi API và caching dễ dàng.

# Lý do RTK query xuất hiện

Để giúp chúng ta hạn chế lặp đi lặp lại trong quá trình fetch data

Để fetch data trong React
- Khai báo useEffect và gọi API trong đó
- Xử  lý cleanup function để tránh việc gọi duplicate data
- Tracking trạng thái loading để hiển thị skeleton
- Quản lý thời gian cache khi user tương tác UI
