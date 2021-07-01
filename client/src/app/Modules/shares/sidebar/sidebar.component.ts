import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	menuList = [
		{
			id: 1,
			name: "Bảng điều khiển",
			icon: "icon-home4",
			path: "dashboard"
		},
		{
			id: 2,
			name: "Quản lý kế hoạch",
			icon: "fas fa-solar-panel",
			path: "plan-manager"
		},
		{
			id: 3,
			name: "Quản lý chỉ tiêu",
			icon: "icon-angle",
			child: [
				{
					id: 31,
					name: "Thông tư",
					icon: "icon-folder-close",
					path: "document-manager"
				},
				{
					id: 32,
					name: "Đơn vị tính",
					icon: "icon-briefcase",
					path: "measure-unit-manager"
				}
			]
		},
		{
			id: 4,
			name: "Quản lý kết quả",
			icon: "icon-check",
			path: "result-manager"
		},
		{
			id: 5,
			name: "Thống kê - Báo cáo",
			icon: "fas fa-chart-bar",
			child: [
				{
					id: 51,
					name: "Thống kê",
					icon: "icon-check",
					path: "report-manager"
				},
				{
					id: 52,
					name: "Hoạt động thể thao quần chúng",
					icon: "icon-check",
					path: "report2-manager"
				},
				{
					id: 53,
					name: "Kinh phí vật chất",
					icon: "icon-check",
					path: "report3-manager"
				}
			]
		},
		{
			id: 6,
			name: "Quản lý đơn vị",
			icon: "fas fa-bezier-curve",
			path: "unit-manager"
		},
		{
			id: 7,
			name: "Quản lý quân nhân",
			icon: "fas fa-address-book",
			child: [
				{
					id: 71,
					name: "Quân nhân",
					icon: "icon-group",
					path: "soldier-manager"
				},
				{
					id: 72,
					name: "Chức vụ",
					icon: "icon-shield",
					path: "job-manager"
				},
				{
					id: 73,
					name: "Đối tượng",
					icon: "icon-male",
					path: "participant-manager"
				}
			]
		},
		{
			id: 8,
			name: "Quản lý tài khoản",
			icon: "icon-users",
			path: "account-manager"
		},
		{
			id: 9,
			name: "Cấu hình hệ thống",
			icon: "icon-cog2",
			path: "configure-manager"
		}
	];
	activePath = "";

	constructor() { }

	ngOnInit(): void {
	}

	// Set active menu
	setActiveMenu(path: string) {
		// console.log(path)
		this.activePath = path;
	}
}
